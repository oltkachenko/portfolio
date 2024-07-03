import SessionStorage from '@/components/SessionStorage'
import GridLayout from '@/components/common/GridLayout'
import Modules from '@/components/modules/Modules'
import PortableText from '@/components/portableText/PortableText'
import type { SanityPage } from '@/lib/sanity'
import { PAGE_SLUG_QUERY } from '@/queries/slugPages/page'
import { client } from '@/sanity/lib/client'
import React from 'react'

type Props = {
    params: { slug: string, locale: string };
};

export default async function Page({ params }: Props) {
    const page = await client.fetch<SanityPage>(
        PAGE_SLUG_QUERY,
        {
            language: params.locale,
            slug: params.slug,
        },
        {
            next: { revalidate: 60 * 60 * 24 }
        }
    )
    
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
