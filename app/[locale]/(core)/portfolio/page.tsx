import SessionStorage from '@/components/SessionStorage';
import GridLayout from '@/components/common/GridLayout';
import Category from '@/components/portfolio/Category';
import ViewSwitcher from '@/components/portfolio/ViewSwitcher';
import type { SanityPortfolioPage } from '@/lib/sanity';
import { Link } from '@/navigation';
import { PORTFOLIO_PAGE_QUERY } from '@/queries/portfolio';
import { client } from '@/sanity/lib/client';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

type Props = {
    params: { locale: string };
};

export default async function Portfolio({ params }: Props) {
    const t = await getTranslations('PortfolioPage')

    const portfolio = await client.fetch<SanityPortfolioPage>(
        PORTFOLIO_PAGE_QUERY, 
        {
            "language": params.locale
        }
    )
    
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
