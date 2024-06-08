export const i18n = {
    defaultLocale: 'en',
    locales: [
        {id: 'en', title: 'English', icon: 'EN', previewUrl: ''},
        {id: 'ua', title: 'Українська', icon: 'UA', previewUrl: 'uk_UA'},
    ]
} as const
  
export type Locale = (typeof i18n)['locales'][number]
