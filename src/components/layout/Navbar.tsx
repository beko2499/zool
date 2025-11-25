"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartSidebar from "@/components/cart/CartSidebar";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface NavbarProps {
    locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount } = useCart();
    const t = useTranslations('nav');
    const pathname = usePathname();
    const router = useRouter();

    // Scroll listener for transparency effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en';
        router.replace(pathname, { locale: newLocale });
    };

    const navLinks = [
        { name: t('home'), href: "/" },
        { name: t('menu'), href: "/menu" },
        { name: t('about'), href: "/about" },
        { name: t('locations'), href: "/locations" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-lg shadow-md"
                        : "bg-white dark:bg-neutral-900 shadow-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold" style={{ color: '#e63b23' }}>
                                Zoalinoo Burger
                            </span>
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center justify-center flex-1 space-x-8 rtl:space-x-reverse">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#e63b23] transition-colors uppercase tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            {/* Language Switcher */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#e63b23] transition-colors"
                                aria-label="Switch Language"
                            >
                                <Globe className="w-5 h-5" />
                                <span>{locale === 'en' ? 'AR' : 'EN'}</span>
                            </button>

                            {/* Cart Button */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-gray-700 dark:text-gray-200 hover:text-[#e63b23] transition-colors"
                                aria-label="Shopping Cart"
                            >
                                <ShoppingBag className="w-6 h-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#e63b23] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-[#e63b23] transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg border-t border-gray-200 dark:border-neutral-800">
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-[#e63b23] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} locale={locale} />
        </>
    );
}
