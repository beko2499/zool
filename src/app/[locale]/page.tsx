"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import Hero from "@/components/home/Hero";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations('home');
    const tProducts = useTranslations('products');
    const tMenu = useTranslations('menu');

    return (
        <div className="flex flex-col gap-16 pb-16">
            {/* Hero Section with Video Background */}
            <Hero />

            {/* Featured Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t('fanFavorites')}</h2>
                    <p className="text-neutral-500">{t('fanFavoritesSubtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 - The Classic Zoal */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-neutral-100 dark:border-neutral-700 group">
                        <div className="relative h-48 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                            <Image
                                src="/TheClassicZoal.jpg"
                                alt={tProducts('classicZoal.name')}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-foreground">{tProducts('classicZoal.name')}</h3>
                            </div>
                            <p className="text-neutral-500 text-sm mb-4">
                                {tProducts('classicZoal.description')}
                            </p>
                            <Link href="/menu">
                                <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    {t('orderNow')}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 - Spicy Nile */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-neutral-100 dark:border-neutral-700 group">
                        <div className="relative h-48 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                            <Image
                                src="/SpicyNile.jpg"
                                alt={tProducts('spicyNile.name')}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 rtl:right-auto rtl:left-2">
                                {tProducts('spicy')}
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-foreground">{tProducts('spicyNile.name')}</h3>
                            </div>
                            <p className="text-neutral-500 text-sm mb-4">
                                {tProducts('spicyNile.description')}
                            </p>
                            <Link href="/menu">
                                <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    {t('orderNow')}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 - Desert Chicken */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-neutral-100 dark:border-neutral-700 group">
                        <div className="relative h-48 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                            <Image
                                src="/DesertChicken.jpg"
                                alt={tProducts('desertChicken.name')}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-foreground">{tProducts('desertChicken.name')}</h3>
                            </div>
                            <p className="text-neutral-500 text-sm mb-4">
                                {tProducts('desertChicken.description')}
                            </p>
                            <Link href="/menu">
                                <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    {t('orderNow')}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
