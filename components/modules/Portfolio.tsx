import React from 'react'
import GridLayout from '../common/GridLayout'
import type { SanityModulePortfolio } from '@/lib/sanity'
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

export default function Portfolio(portfolio: SanityModulePortfolio) {

    console.log(portfolio);
    
    return (
        <GridLayout style={{"--bg-layout-color": portfolio.backgroundColor?.value} as React.CSSProperties}>
            <section className="portfolio">
                <div className="portfolio-heading">
                    <h2 className="portfolio-title">{portfolio.title}</h2>
                    {portfolio.subtitle && (
                        <p className="portfolio-subtitle">{portfolio.subtitle}</p>
                    )}
                </div>
                
                <div className='portfolio-content'>
                    {portfolio.projectsList.map(project => (
                        <div key={project._id} className='project_tile'>
                            <Link href={project.slug}>
                                <Image 
                                    className='project_tile-img'
                                    src={project.images[0].image.url}
                                    alt={`${project.images[0].image.alt || project.images[0].image.altText || ''}`} 
                                    width={690}
                                    height={286}
                                    placeholder="blur"
                                    blurDataURL={project.images[0].image.blurDataURL}
                                />
                            </Link>

                            <div className='project_tile-content'>
                                <h3 className='project_tile-title'>{project.title}</h3>

                                <Link className="project_tile-link" href={project.slug}>
                                    See details
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </GridLayout>
    )
}
