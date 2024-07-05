import React from 'react'
import GridLayout from '../common/GridLayout'
import type { SanityModulePortfolio } from '@/lib/sanity'
import {Link} from '@/navigation';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import Heading from './Heading';
import CustomLink from '../elements/CustomLink';
import { useTranslations } from 'next-intl';

interface Props {
    portfolio: SanityModulePortfolio;
}

export default function Portfolio({ portfolio }: Props) {
    const t = useTranslations('PortfolioTile');

    return (
        <GridLayout style={{"--bg-layout-color": portfolio.backgroundColor?.value} as React.CSSProperties}>
            <section className="portfolio">
                <Heading data={{
                    title: portfolio.title,
                    subtitle: portfolio.subtitle,
                    alignment: portfolio.headingAlignment
                }} />
                
                <div className='portfolio-content'>
                    {portfolio.projectsList && portfolio.projectsList.map(project => (
                        <div key={project._id} className='project_tile'>
                            {project.tileImage && (
                                <Link href={project.slug}>
                                    <Image 
                                        className='project_tile-img'
                                        src={project.tileImage.url}
                                        alt={project.tileImage.alt || project.tileImage.altText || ''} 
                                        width={690}
                                        height={286}
                                        placeholder="blur"
                                        blurDataURL={project.tileImage.blurDataURL}
                                    />
                                </Link>
                            )}
                            
                            <div className='project_tile-content'>
                                <h3 className='project_tile-title'>{project.title}</h3>

                                <Link 
                                    className="project_tile-link"
                                    href={project.slug}
                                    aria-label={t('linkwai', {name: project.title})}
                                >
                                    {t('linkTitle')}
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {portfolio.links && portfolio.links.length && (
                    <div className='portfolio-actions'>
                        {portfolio.links.map(link => (
                            <CustomLink key={link._key} link={link} >
                                {link.title}
                            </CustomLink>
                        ))}
                    </div>
                )}
            </section>
        </GridLayout>
    )
}
