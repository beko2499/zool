"use client";

import { Product } from "@/data/products";
import { Plus, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";
import { formatPrice } from "@/lib/currency";
import { useTranslations } from "next-intl";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('menu');
    const tProducts = useTranslations('products');
    const locale = useTranslations('common')('currency') === 'ج.س' ? 'ar' : 'en';

    // Get translated product details
    const translatedProduct = {
        ...product,
        name: tProducts(`${product.translationKey}.name`),
        description: tProducts(`${product.translationKey}.description`),
    };

    return (
        <>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700 group">
                <div className="relative h-48 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                    {/* Product Image */}
                    <Image
                        src={product.image}
                        alt={translatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.spicy && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                            {tProducts('spicy')}
                        </span>
                    )}

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-neutral-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <Eye className="w-4 h-4" /> {t('quickView')}
                        </button>
                    </div>
                </div>

                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-foreground line-clamp-1">{translatedProduct.name}</h3>
                        <span className="text-primary font-bold text-lg">{formatPrice(product.price, locale)}</span>
                    </div>

                    <p className="text-neutral-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                        {translatedProduct.description}
                    </p>

                    <button
                        onClick={() => addToCart(translatedProduct)}
                        className="w-full py-2.5 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 active:scale-95"
                    >
                        <Plus className="w-5 h-5" /> {t('addToOrder')}
                    </button>
                </div>
            </div>

            <ProductModal
                product={translatedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
