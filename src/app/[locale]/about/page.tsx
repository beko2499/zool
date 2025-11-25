"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations('about');
    const tHero = useTranslations('hero.about');

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section with Background Image */}
            <div className="relative h-[350px] md:h-[400px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/Our Story.png"
                    alt="Our Story Background"
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
                        {tHero('title')}
                    </h1>
                    <p className="text-xl text-neutral-100 max-w-3xl mx-auto drop-shadow-lg">
                        {tHero('subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100 dark:border-neutral-700">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-3xl font-bold text-primary mb-6">{t('vision')}</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                            {t('visionText1')}
                        </p>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                            {t('visionText2')}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-secondary mb-3">{t('authenticSpices')}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    {t('authenticSpicesText')}
                                </p>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-secondary mb-3">{t('freshIngredients')}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    {t('freshIngredientsText')}
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">{t('meetTeam')}</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300">
                            {t('meetTeamText')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
