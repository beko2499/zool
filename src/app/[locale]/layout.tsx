import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Zoalinoo Burger | Sudanese Urban Modern",
    description: "Authentic Sudanese flavors with a modern burger twist.",
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    // Await params before accessing locale
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased font-sans`}
            >
                <NextIntlClientProvider messages={messages}>
                    <CartProvider>
                        <Navbar locale={locale} />
                        <main className="min-h-screen pt-16">
                            {children}
                        </main>
                        <Footer />
                    </CartProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
