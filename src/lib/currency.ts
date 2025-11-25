// Currency conversion utility
export const USD_TO_SDG = 600;

/**
 * Convert USD to SDG
 */
export function convertToSDG(usdPrice: number): number {
    return usdPrice * USD_TO_SDG;
}

/**
 * Format price in SDG with proper formatting
 */
export function formatSDG(price: number, locale: string = 'en'): string {
    const sdgPrice = convertToSDG(price);

    // Format with thousands separator
    const formatted = new Intl.NumberFormat(locale === 'ar' ? 'ar-SD' : 'en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(sdgPrice);

    return formatted;
}

/**
 * Get currency symbol based on locale
 */
export function getCurrencySymbol(locale: string): string {
    return locale === 'ar' ? 'ج.س' : 'SDG';
}

/**
 * Format complete price string with currency
 */
export function formatPrice(usdPrice: number, locale: string = 'en'): string {
    const formatted = formatSDG(usdPrice, locale);
    const symbol = getCurrencySymbol(locale);

    // In Arabic, currency comes after the number
    return locale === 'ar' ? `${formatted} ${symbol}` : `${symbol} ${formatted}`;
}
