"use client";

import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LocationsPage() {
    const t = useTranslations('locations');
    const tHero = useTranslations('hero.locations');

    const locations = [
        {
            id: 1,
            name: t('khartoumDowntown'),
            address: t('khartoumAddress'),
            phone: "+249 123 456 789",
            hours: "11:00 AM - 11:00 PM",
            image: "downtown"
        },
        {
            id: 2,
            name: t('omdurmanSouq'),
            address: t('omdurmanAddress'),
            phone: "+249 987 654 321",
            hours: "10:00 AM - 12:00 AM",
            image: "omdurman"
        },
        {
            id: 3,
            name: t('bahriNorth'),
            address: t('bahriAddress'),
            phone: "+249 111 222 333",
            hours: "12:00 PM - 10:00 PM",
            image: "bahri"
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section with Background Image */}
            <div className="relative h-[320px] md:h-[350px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/FindUs.png"
                    alt="Find Us Background"
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc) => (
                        <div key={loc.id} className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                                <span className="text-neutral-400 font-bold">{loc.name} Map</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">{loc.name}</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                                        <MapPin className="w-5 h-5 text-secondary mt-1" />
                                        <span>{loc.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                                        <Phone className="w-5 h-5 text-secondary" />
                                        <span>{loc.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                                        <Clock className="w-5 h-5 text-secondary" />
                                        <span>{loc.hours}</span>
                                    </div>
                                </div>

                                <button className="w-full mt-6 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-colors">
                                    {t('getDirections')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
