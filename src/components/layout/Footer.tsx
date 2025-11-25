"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
    const tLocations = useTranslations('locations');

    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">{t('quickLinks')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                                    {tNav('home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu" className="text-neutral-400 hover:text-white transition-colors">
                                    {tNav('menu')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                                    {tNav('about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations" className="text-neutral-400 hover:text-white transition-colors">
                                    {tNav('locations')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">{tNav('locations')}</h3>
                        <ul className="space-y-4 text-neutral-400">
                            <li>{tLocations('khartoumDowntown')}</li>
                            <li>{tLocations('omdurmanSouq')}</li>
                            <li>{tLocations('bahriNorth')}</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">{t('followUs')}</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Banner - Centered Bottom */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/zoalinoo-footer-banner-dark.jpg"
                        alt="Zoalinoo Burger - زولينو برجر"
                        width={400}
                        height={80}
                        className="w-auto h-16 md:h-20"
                        priority
                    />
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zoalinoo Burger. {t('allRightsReserved')}</p>
                </div>
            </div>
        </footer>
    );
}
