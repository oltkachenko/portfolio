import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { i18n } from './i18n.config';

const locales = i18n.locales.map(locale => locale.id);
export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });