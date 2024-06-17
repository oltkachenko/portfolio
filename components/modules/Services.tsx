import React from 'react'
import GridLayout from '../common/GridLayout'
import Tile from '../Tile'
import type { SanityModuleServices } from '@/lib/sanity'
import Heading from './Heading'
import CustomLink from '../elements/CustomLink'

interface Props {
    services: SanityModuleServices;
}

export default async function Services({ services }: Props) {
    return (
        <GridLayout style={{"--bg-layout-color": services.backgroundColor?.value} as React.CSSProperties}>
            <section className="services">
                <Heading data={{
                    title: services.title,
                    subtitle: services.subtitle,
                    alignment: services.headingAlignment
                }} />
                
                <div className='services-content'>
                    {services.servicesList.map(service => (
                        <Tile key={service._id} {...service} />
                    ))}
                </div>

                {services.links && services.links.length && (
                    <div className='services-actions'>
                        {services.links.map(link => (
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
