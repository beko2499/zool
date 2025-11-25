"use client";

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/currency";
import { useTranslations } from "next-intl";

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const t = useTranslations('menu');
    const tProducts = useTranslations('products');
    const locale = useTranslations('common')('currency') === 'ج.س' ? 'ar' : 'en';

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        setQuantity(1);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full z-10 transition-colors rtl:right-auto rtl:left-4"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Product Image */}
                    <div className="relative h-64 md:h-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        {product.spicy && (
                            <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 rtl:right-auto rtl:left-4">
                                {tProducts('spicy')}
                            </span>
                        )}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col h-full">
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold">{product.name}</h2>
                                <span className="text-xl font-bold text-primary">{formatPrice(product.price, locale)}</span>
                            </div>

                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-md text-neutral-500">
                                    {product.category}
                                </span>
                                {product.spicy && (
                                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider rounded-md">
                                        {tProducts('spicy')}
                                    </span>
                                )}
                            </div>

                            <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                                <span className="font-medium">{tProducts('quantity')}</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-1 hover:bg-white dark:hover:bg-neutral-700 rounded-lg transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="font-bold w-4 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-1 hover:bg-white dark:hover:bg-neutral-700 rounded-lg transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                {t('addToOrder')} - {formatPrice(product.price * quantity, locale)}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
