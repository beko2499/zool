"use client";

import { useState } from "react";
import Image from "next/image";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/menu/ProductCard";
import { Filter } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type Category = 'all' | 'burger' | 'side' | 'drink';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const t = useTranslations('menu');
    const tHero = useTranslations('hero.menu');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    const categories: { id: Category; label: string }[] = [
        { id: 'all', label: t('categories.all') },
        { id: 'burger', label: t('categories.burger') },
        { id: 'side', label: t('categories.side') },
        { id: 'drink', label: t('categories.drink') },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section with Background Image */}
            <div className="relative h-[350px] md:h-[400px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/OurMenu.png"
                    alt="Our Menu Background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-[1]" />

                {/* Gradient Overlay for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[2]" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
                        {tHero('title')}
                    </h1>
                    <p className="text-neutral-100 max-w-2xl mx-auto drop-shadow-lg">
                        {tHero('subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {/* Filters */}
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-2 mb-8 flex flex-wrap gap-2 justify-center md:justify-start border border-neutral-100 dark:border-neutral-700">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={clsx(
                                "px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm md:text-base",
                                activeCategory === cat.id
                                    ? "bg-primary text-white shadow-md"
                                    : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-full p-6 inline-block mb-4">
                            <Filter className="w-8 h-8 text-neutral-400" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{t('noItems')}</h3>
                        <p className="text-neutral-500">{t('tryDifferent')}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
