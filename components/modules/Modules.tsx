import React from 'react'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import type { SanityModule } from '@/lib/sanity'
import getTranslation from '@/helpers/getTranslation'
import Callout from './Callout'

interface Props {
    moduleData: SanityModule;
}

export default async function Modules({moduleData}: Props) {
    const translation = await getTranslation("ContactForm", [
        'labelName',
        'labelEmail',
        'labelSubject',
        'labelMessage',
        'buttonName',
        "formErrors.name",
        "formErrors.email",
        "formErrors.subject",
        "formErrors.message",
    ])

    switch (moduleData._type) {
        case "module.services":
            return <Services services={moduleData} />
        case "module.about":
            return <About about={moduleData}/>
        case "module.contact":
            return <Contact contact={moduleData} formTranslation={translation}/>
        case "module.portfolio":
            return <Portfolio portfolio={moduleData}/>
        case "module.callout":
            return <Callout callout={moduleData}/>
        default:
            return null;
    }
}
