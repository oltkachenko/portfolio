import React from 'react'
import GridLayout from '../common/GridLayout'
import CustomLink from '../elements/CustomLink'
import Heading from './Heading'
import type { SanityModuleCallout } from '@/lib/sanity'

interface Props {
    callout: SanityModuleCallout;
}

export default function Callout({ callout }: Props) {
    return (
        <GridLayout>
            <section className={`callout m-${callout.alignment ? callout.alignment : 'center'}`}>
                <Heading data={{
                    title: callout.title,
                    subtitle: callout.subtitle,
                    alignment: callout.alignment
                }} />
                
                {callout.links && callout.links.length && (
                    <div className='callout-actions'>
                        {callout.links.map(link => (
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
