import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { i18n } from '@/i18n.config';
 
// Can be imported from a shared config
const locales = i18n.locales.map(locale => locale.id);
 
export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();
    
    return {
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});