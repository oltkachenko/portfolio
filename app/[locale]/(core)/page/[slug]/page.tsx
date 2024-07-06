import SessionStorage from '@/components/SessionStorage'
import GridLayout from '@/components/common/GridLayout'
import Modules from '@/components/modules/Modules'
import PortableText from '@/components/portableText/PortableText'
import type { SanityPage } from '@/lib/sanity'
import { PAGE_SLUG_QUERY } from '@/queries/slugPages/page'
import { client } from '@/sanity/lib/client'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

type Props = {
    params: { slug: string, locale: string };
};

const getPage = async ({params: {locale, slug}}: Props) => {
    const data = await client.fetch<SanityPage>(
        PAGE_SLUG_QUERY,
        {
            language: locale,
            slug: slug,
        },
        {
            next: { revalidate: 60 * 60 * 24 }
        }
    )

    return data;
}

export async function generateMetadata({ params }: Props) {
    const project = await getPage({params});
    const t = await getTranslations('Metadata');

    const metadata: Metadata = {
        title: project.seo.title,
        openGraph: {
            title: project.seo.title,
            type: "website",
            locale: params.locale,
            url: `${process.env.METADATA_BASE_URL}/${params.locale}/page/${params.slug}`,
            siteName: t('siteName')
        },
    }

    if (project.seo.description) {
        metadata.description = project.seo.description;
        metadata.openGraph!.description = project.seo?.description
    }

    return metadata;
}

export default async function Page({ params }: Props) {
    const page = await getPage({ params })
    
    return (
        <main className="">
            <GridLayout>
                <section className='page'>
                    {page.body && (
                        <PortableText blocks={page.body} className=''/>
                    )}
                </section>
                
            </GridLayout>

            {page.modules && page.modules.map(moduleData => 
                <Modules key={moduleData._key} moduleData={moduleData} />
            )}

            {page?._translations && (
                <SessionStorage data={page?._translations}/>

            )}
        </main>
    )
}
