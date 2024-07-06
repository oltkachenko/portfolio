import Modules from "@/components/modules/Modules";
import type { SanityHomePage } from "@/lib/sanity";
import { HOME_PAGE_QUERY } from "@/queries/home";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
    params: { locale: string };
};

const getHomePage = async ({params: {locale}}: Props) => {
    const data = await client.fetch<SanityHomePage>(
        HOME_PAGE_QUERY, 
        {
            "language": locale
        },
        {
            next: { revalidate: 60 * 60 * 24 }
        }
    )

    return data;
}

export async function generateMetadata({ params }: Props) {
    const homePage = await getHomePage({params});
    const t = await getTranslations('Metadata');

    const metadata: Metadata = {
        title: {
            absolute: homePage.seo.title,
        },
        openGraph: {
            title: homePage.seo.title,
            type: "website",
            locale: params.locale,
            url: `${process.env.METADATA_BASE_URL}/${params.locale}`,
            siteName: t('siteName')
        },
    }

    if (homePage.seo.description) {
        metadata.description = homePage.seo.description;
        metadata.openGraph!.description = homePage.seo?.description
    }

    return metadata;
}

export default async function Home({ params }: Props) {
    const homePage = await getHomePage({params});

    return (
        <main className="">
            {homePage.modules && homePage.modules.map(moduleData => 
                <Modules key={moduleData._key} moduleData={moduleData} />
            )}
        </main>
    );
}
