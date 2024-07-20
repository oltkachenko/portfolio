import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/common.scss";
import { getTranslations } from "next-intl/server";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

type Props = {
    params: { locale: string };
};

export async function generateMetadata({params: {locale}}: Props) {
    const t = await getTranslations({locale, namespace: 'Metadata'});
   
    return {
        metadataBase: new URL(`${process.env.METADATA_BASE_URL}`),
        alternates: {
            canonical: `${process.env.METADATA_BASE_URL}/${locale}`,
            languages: {
                'en-US': '/en',
                'uk': '/ua',
            },
        },
        title: {
            default: t('title'),
            template: `%s | ${t('title')}`
        },
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: "website",
            locale: locale,
            url: `${process.env.METADATA_BASE_URL}`,
            siteName: t('siteName')
        },
    };
}
  
export default function RootLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {
    return (
        <html lang={locale}>
            <body className={inter.className}>
                {children}

                <Analytics />
            </body>
        </html>
    );
}
