'use client'

import {useLocale} from 'next-intl';
import { i18n } from '@/i18n.config';
import { useRef, useState, useTransition, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import ReactCountryFlag from 'react-country-flag';
 
export default function LocaleSwitcher() {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const locales = i18n.locales;
    const locale = useLocale();

    const localeTitle = locales.find(loc => locale === loc.id)?.title;
    
    useOnClickOutside(ref, () => setIsOpen(false));

    function onClick(event: MouseEvent<HTMLDivElement>) {
        if (!(event.target instanceof HTMLDivElement)) {
            return;
        }

        const nextLocale = event.target.dataset.value;

        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    }
    
    return (
        <div 
            className={`locale_switcher ${isOpen ? 'open' : ''} ${isPending ? 'disabled' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            ref={ref}
        >
            <div aria-controls="listbox1"
                className="locale_switcher-input"
                role="combobox"
            >
                <ReactCountryFlag countryCode={locale.toUpperCase() === 'EN' ? 'GB' : locale.toUpperCase() || 'GB'}
                    svg
                    style={{
                        width: '20px',
                        height: '15px',
                    }} 
                />
                <span className="locale_switcher-input_title">
                    {localeTitle}
                </span>
            </div>
            { isOpen && (
                <div className="locale_switcher-menu"
                    role="listbox"
                >
                    {locales.map((cur) => (
                        <div 
                            key={cur.id}
                            role="option"
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
                            />
                            {cur.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}