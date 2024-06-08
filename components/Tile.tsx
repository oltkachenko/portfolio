import type { SanityService } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Tile(service: SanityService ) {
    return (
        <div className="tile">
            <Image 
                className='tile-img'
                src={service.image.url}
                alt={service.title} 
                width={64}
                height={64}
            />

            <h3 className="tile-title">{service.title}</h3>

            <p className="tile-description">
                {service.description && (
                    service.description?.value
                )}
            </p>
    
            <Link className="tile-link" href="/">
                Read More
                <FaArrowRight />
            </Link>
        </div>
    )
}
