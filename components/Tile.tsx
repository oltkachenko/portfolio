import type { SanityService } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CustomLink from './elements/CustomLink'
import { useTranslations } from 'next-intl'

export default function Tile(service: SanityService ) {
    const t = useTranslations('ServiceTile')

    return (
        <div className="tile">
            <Image 
                className='tile-img'
                src={service.image.url}
                alt='' 
                width={64}
                height={64}
            />

            <h3 className="tile-title">{service.title}</h3>

            <p className="tile-description">
                {service.description && (
                    service.description?.value
                )}
            </p>
    
            {service.showDetailsLink && (
                service.detailsLink ? (
                    <CustomLink 
                        className='tile-link'
                        key={service._id}
                        link={service.detailsLink[0]}
                        aria-label={t('linkwai', {serviceName: service.title})}
                    >
                        {t('linkTitle')}
                        <FaArrowRight />
                    </CustomLink>
                ) : (
                    <Link 
                        className="tile-link"
                        href={service.slug}
                        aria-label={t('linkwai', {serviceName: service.title})}
                    >
                        {t('linkTitle')}
                        <FaArrowRight />
                    </Link>
                )
            )}
        </div>
    )
}
