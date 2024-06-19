'use client'

import {useLocale} from 'next-intl';
import { i18n } from '@/i18n.config';
import { useRef, useState, useTransition, type MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import ReactCountryFlag from 'react-country-flag';
 
export default function LocaleSwitcher() {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const locales = i18n.locales;
    const locale = useLocale();
    const pathname = usePathname();


//     // const pathname = usePathname()

//         const regex = /^\/[en|ua]\S/;
// var newstr = pathname.replace(regex, "");
// console.log('new', newstr);


//     const pathnameArray = pathname.split('/')

//     if (pathnameArray[pathnameArray.length-1] === sessionData.data.find((loc: any)=> loc.language === 'en').slug) {
//         console.log('test');
//     }


    

    function rediretPath(nextLocale: string | undefined) {
        const pathnameArray = pathname.split('/');

        let path = pathnameArray?.slice(2, -1).join('/')



        const translation111 = sessionStorage.getItem("translation");

        let sessionData;
        let sessionDataSlug;
        if (translation111) {
            sessionData = JSON.parse(translation111);

            sessionDataSlug = sessionData.data.find((loc: any)=> loc.language === locale).slug
        }

        if (pathnameArray[pathnameArray.length-1] === sessionDataSlug) {
            return `${path}/${sessionData.data.find((loc: any)=> loc.language === nextLocale).slug}`
        }

        return `/`
    }
    

    const localeTitle = locales.find(loc => locale === loc.id)?.title;
    
    useOnClickOutside(ref, () => setIsOpen(false));

    function onClick(event: MouseEvent<HTMLDivElement>) {
        if (!(event.target instanceof HTMLDivElement)) {
            return;
        }

        const nextLocale = event.target.dataset.value;

        startTransition(() => {
            router.replace(`/${nextLocale}/${rediretPath(nextLocale)}`);
        });
    }
    
    return (
        <div 
            className={`locale_switcher ${isOpen ? 'open' : ''} ${isPending ? 'disabled' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            ref={ref}
        >
            <div className="locale_switcher-input">
                <ReactCountryFlag countryCode={locale.toUpperCase() === 'EN' ? 'GB' : locale.toUpperCase() || 'GB'}
                    svg
                    style={{
                        width: '20px',
                        height: '15px',
                    }}
                    alt={localeTitle}
                />
                <span className="locale_switcher-input_title">
                    {localeTitle}
                </span>
            </div>
            { isOpen && (
                <div className="locale_switcher-menu">
                    {locales.map((cur) => (
                        <div 
                            key={cur.id}
                            data-value={cur.id}
                            className={`locale_switcher-option ${locale === cur.id ? 'option-current' : ''}`} 
                            onClick={onClick}
                        >
                            <ReactCountryFlag countryCode={cur.icon === 'EN' ? 'GB' : cur.icon || 'GB'}
                                svg
                                style={{
                                    width: '20px',
                                    height: '15px',
                                }}
                                alt={cur.title}
                            />
                            {cur.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}