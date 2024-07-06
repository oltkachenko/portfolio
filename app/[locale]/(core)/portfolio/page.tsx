import SessionStorage from '@/components/SessionStorage';
import GridLayout from '@/components/common/GridLayout';
import Category from '@/components/portfolio/Category';
import ViewSwitcher from '@/components/portfolio/ViewSwitcher';
import type { SanityNavigation, SanityPortfolioPage } from '@/lib/sanity';
import { Link } from '@/navigation';
import { NAVIGATION } from '@/queries/fragments/navigation';
import { PORTFOLIO_PAGE_QUERY } from '@/queries/portfolio';
import { client } from '@/sanity/lib/client';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

type Props = {
    params: { locale: string };
};

const getPortfolio = async ({params: {locale}}: Props) => {
    const data = await client.fetch<SanityPortfolioPage>(
        PORTFOLIO_PAGE_QUERY, 
        {
            "language": locale
        }
    )

    return data;
}

export async function generateMetadata({ params }: Props) {
    const navigation = await client.fetch<SanityNavigation>(NAVIGATION, {
        language: params.locale
    }).then((data) => {
        return data.menuLinks.filter(item => item._type === "linkPage" && item.pageType === 'portfolio')[0]
    })

    const t = await getTranslations('Metadata');

    if (navigation._type === "linkPage") {
        const metadata: Metadata = {
            title: {
                absolute: navigation.seo.title,
            },
            openGraph: {
                title: navigation.seo.title,
                type: "website",
                locale: params.locale,
                url: `${process.env.METADATA_BASE_URL}/${params.locale}/${navigation.pageType}`,
                siteName: t('siteName')
            },
        }
    
        if (navigation.seo.description) {
            metadata.description = navigation.seo.description;
            metadata.openGraph!.description = navigation.seo.description
        }
    
        return metadata;
    }

    return null
}

export default async function Portfolio({ params }: Props) {
    const t = await getTranslations('PortfolioPage')

    const portfolio = await getPortfolio({ params })
    
    if (!portfolio) {
        return notFound()
    }
    
    return (
        <>
            <div className='portfolio_page'>
                <GridLayout>
                    <h1 className='portfolio_page-title'>{t('title')}</h1>
                    {/* <div className='animated_bar'></div> */}

                    <ViewSwitcher >

                    <main className='portfolio_page-grid'>
                        {portfolio.map(item => (
                            <div key={item._id} className='portfolio_page-grid_tile portfolio_tile'>
                                {item.tileImage && (
                                    <Link className='portfolio_tile-img_link' href={item.slug}>
                                        <Image 
                                            className='portfolio_tile-img'
                                            src={item.tileImage.url}
                                            alt={item.tileImage.alt || item.tileImage.altText || ''}
                                            width={636}
                                            height={286}
                                            placeholder="blur"
                                            blurDataURL={item.tileImage.blurDataURL}
                                        />
                                    </Link>
                                )}
                                
                                <div className='portfolio_tile-content'>
                                    {item.category && (
                                        <span className='portfolio_tile-badge'>
                                            <Category category={item.category}/>
                                        </span>
                                    )}
                                    
                                    <h3 className='portfolio_tile-title'>{item.title}</h3>

                                    {item.shortDescription && (
                                        <p className='portfolio_tile-short_description'>{item.shortDescription}</p>
                                    )}
                                    
                                    <div className='portfolio_tile-action'>
                                        <Link className='portfolio_tile-link' href={item.slug}>
                                            {t('linkName')}
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </main>
                    </ViewSwitcher>
                </GridLayout>
            </div>


            <SessionStorage data={[
                { slug: 'portfolio', language: 'en' },
                { slug: 'portfolio', language: 'ua' }
            ]}/>
        </>
    )
}
