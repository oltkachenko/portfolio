import type { SanitySocial } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    social: SanitySocial
}

export default function Social({ social }: Props ) {
    return (
        <Link 
            key={social._id}
            href={social.link}
            title={social.title}
            target='_blank'
        >
            <Image 
                className=''
                src={social.image.url}
                alt={social.title} 
                width={48}
                height={48}
            />
        </Link>
    )
}
