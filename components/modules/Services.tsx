import React from 'react'
import GridLayout from '../common/GridLayout'
import Tile from '../Tile'
import type { SanityModuleServices } from '@/lib/sanity'

export default async function Services(services: SanityModuleServices) {
    return (
        <GridLayout style={{"--bg-layout-color": services.backgroundColor?.value} as React.CSSProperties}>
            <section className="services">
                <div className="services-heading">
                    <h2 className="services-title">{services.title}</h2>
                    {services.subtitle && (
                        <p className="services-subtitle">{services.subtitle}</p>
                    )}
                </div>
                
                <div className='services-content'>
                    {services.servicesList.map(service => (
                        <Tile key={service._id} {...service} />
                    ))}
                </div>
            </section>
        </GridLayout>
    )
}
