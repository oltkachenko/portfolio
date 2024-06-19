import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n.config';
 
export default createMiddleware({
    // A list of all locales that are supported
    locales: i18n.locales.map(locale => locale.id),
    // Used when no locale matches
    defaultLocale: i18n.defaultLocale,
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', `/(ua|en)/:path*`, '/((?!studio|_next|_vercel|.*\\..*).*)']
};