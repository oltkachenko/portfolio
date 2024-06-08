import type { SanityContactInfo } from '@/lib/sanity'
import React from 'react'

interface Props {
    info: SanityContactInfo,
    className?: string
}

export default function ContactInfo({info, className}: Props ) {
    return (
        <div className={`${className ? className : ''} contact_info`}>
            <div className='contact_info-title'>{info.title}</div>
            <div className='contact_info-value'>{info.value}</div>
        </div>
    )
}
