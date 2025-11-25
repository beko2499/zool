"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('hero.home');

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/bg.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {t.rich('title', {
                        highlight: (chunks) => <span className="text-primary">{chunks}</span>
                    })}
                </h1>

                <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto mb-4 font-light drop-shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                    {t('subtitle')}
                </p>

                <p className="text-lg md:text-xl text-primary font-bold uppercase tracking-widest mb-10 drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                    {t('subtitle2')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                    <Link href="/menu">
                        <button className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                            {t('orderNow')}
                        </button>
                    </Link>
                    <Link href="/locations">
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all border border-white/30">
                            {t('findUs')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
