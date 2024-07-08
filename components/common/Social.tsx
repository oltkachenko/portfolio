import type { SanitySocial } from '@/lib/sanity'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    social: SanitySocial[]
}

export default function Social({ social }: Props ) {
    const t = useTranslations('Social')

    return (
        <div className='social'>
            {social.map(social => (
                <Link
                    key={social._id}
                    href={social.link}
                    title={t('linkwai', {social: social.title})}
                    target='_blank'
                >
                    <Image 
                        className=''
                        src={social.image.url}
                        alt={social.image.alt || social.image.altText || ''}
                        width={48}
                        height={48}
                    />
                </Link>
            ))}
        </div>
    )
}
