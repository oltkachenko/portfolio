import type { SanityContactInfo } from '@/lib/sanity'
import Link from 'next/link'
import React from 'react'

interface Props {
    info: SanityContactInfo,
    className?: string
}

export default function ContactInfo({info, className}: Props ) {
    return (
        <div className={`${className ? className : ''} contact_info`}>
            <div className='contact_info-title'>{info.title}</div>

            {info.type === "tel" && (
                <Link href={`tel:${info.value}`} className='contact_info-value link'>{info.value}</Link>
            )}

            {info.type === "email" && (
                <Link href={`mailto:${info.value}`} className='contact_info-value link'>{info.value}</Link>
            )}

            {info.type === "text" || info.type === null && (
                <div className='contact_info-value'>{info.value}</div>
            )}
        </div>
    )
}
