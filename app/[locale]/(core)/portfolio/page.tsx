import SessionStorage from '@/components/SessionStorage';
import { PORTFOLIO_PAGE_QUERY } from '@/queries/portfolio';
import { client } from '@/sanity/lib/client';
import React from 'react'

type Props = {
    params: { locale: string };
};

export default async function Portfolio({ params }: Props) {

    const portfolio = await client.fetch(
        PORTFOLIO_PAGE_QUERY, 
        {
            "language": params.locale
        }
    )

    console.log('portfolio', portfolio);
    
    
    return (
        <>
        <div>portfolio page no slug {params.locale}</div>
        <SessionStorage data={[
            { slug: 'portfolio', language: 'en' },
            { slug: 'portfolio', language: 'ua' }
        ]}/>
        </>
    )
}
