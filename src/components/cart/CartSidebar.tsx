"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/currency";
import { useTranslations } from "next-intl";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    locale: string;
}

export default function CartSidebar({ isOpen, onClose, locale }: CartSidebarProps) {
    const { items, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations('cart');
    const tCommon = useTranslations('common');

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCheckout = () => {
        const orderItems = items.map(item => `- ${item.name}`).join('\n');
        const orderQuantities = items.map(item => `- ${item.name}: ${item.quantity}`).join('\n');

        const message = `مرحباً، أود تأكيد طلبي من زولينو برجر:
---------------------------
• المنتجات:
${orderItems}
• الكمية:
${orderQuantities}
• الإجمالي:
${formatPrice(cartTotal, locale)}
• الاسم:
(يرجى كتابة الاسم)
• العنوان:
(يرجى مشاركة الموقع)
---------------------------
شكراً ليكم!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/249907844000?text=${encodedMessage}`, '_blank');
    };

    if (!mounted) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 bottom-0 z-[70] w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl transition-transform duration-300 ease-in-out ${locale === 'ar'
                    ? (isOpen ? "left-0 translate-x-0" : "left-0 -translate-x-full")
                    : (isOpen ? "right-0 translate-x-0" : "right-0 translate-x-full")
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-800">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <ShoppingBag className="w-6 h-6 text-primary" />
                            {t('yourOrder')}
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {items.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-neutral-500">
                                <ShoppingBag className="w-16 h-16 opacity-20" />
                                <p className="text-lg font-medium">{t('empty')}</p>
                                <p className="text-sm">{t('startShopping')}</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-20 h-20 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-foreground line-clamp-1">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-neutral-400 hover:text-red-500 transition-colors"
                                                    title={t('remove')}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-primary font-bold text-sm mb-2">
                                                {formatPrice(item.price, locale)}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="p-1 bg-neutral-100 dark:bg-neutral-800 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 bg-neutral-100 dark:bg-neutral-800 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-neutral-600 dark:text-neutral-400 font-medium">{t('subtotal')}</span>
                                <span className="text-2xl font-bold text-primary">{formatPrice(cartTotal, locale)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-primary/25 mb-3"
                            >
                                {t('checkout')}
                            </button>
                            <button
                                onClick={clearCart}
                                className="w-full py-2.5 text-neutral-500 hover:text-red-500 font-medium text-sm transition-colors"
                            >
                                {t('clearCart')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
