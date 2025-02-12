import React from 'react'
import PortableText from '../portableText/PortableText'
import type { SanityModuleAbout } from '@/lib/sanity'
import GridLayout from '../common/GridLayout'
import Image from 'next/image'
import ContactInfo from '../ContactInfo'
import Link from 'next/link'
import Social from '../common/Social'

interface Props {
    about: SanityModuleAbout;
}

export default function About({ about }: Props) {
    return (
        <GridLayout>
            <section className='about_me'>
                {about.image && about.image.url && (
                    <div className='about_me-img_container'>
                        <Image 
                            className='about_me-img'
                            src={about.image.url}
                            alt={about.image.alt || about.image.altText || ''} 
                            width={418}
                            height={478}
                        />
                    </div>
                )}
                
                <div className='about_me-copy'>
                    {about.title && (
                        <h2 className='about_me-title'>{about.title}</h2>
                    )}
                    
                    {about.body && (
                        <PortableText blocks={about.body} className=''/>
                    )}
                    
                    {about.contactInfo && (<div className='about_me-info'>
                        {about.contactInfo.map(info => (
                            <ContactInfo key={info._id} info={info} className='about_me-info_tile'/>
                        ))}
                    </div>)}

                    {about.file && about.file.fileUrl && about.linkName && (
                        <div className='about_me-actions'>
                            <Link 
                                href={`${about.file.fileUrl}?dl=`}
                                className='button'
                            >
                                {about.linkName}
                            </Link>

                            {about.socialShow && (
                                <div className='about_me-social'>
                                    <Social social={about.social} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </GridLayout>
    )
}
