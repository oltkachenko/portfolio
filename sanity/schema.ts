import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/singletons/home'
import footer from './schemas/singletons/footer'
import page from './schemas/documents/page'
import project from './schemas/documents/project'
import navigation from './schemas/singletons/navigation'
import linkExternal from './schemas/objects/linkExternal'
import linkInternal from './schemas/objects/linkInternal'
import seo from './schemas/objects/seo'
import moduleServices from './schemas/objects/module/services'
import moduleAbout from './schemas/objects/module/about'
import moduleCallout from './schemas/objects/module/callout'
import moduleContact from './schemas/objects/module/contact'
import modulePortfolio from './schemas/objects/module/portfolio'
import services from './schemas/documents/services'
import body from './schemas/blocks/body'
import contactInfo from './schemas/documents/contactInfo'
import contactForm from './schemas/documents/contactForm'
import technologyTag from './schemas/documents/technologyTag'
import linkPage from './schemas/objects/linkPage'
import social from './schemas/documents/social'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Singletons
        home,
        page,
        project,
        linkPage,
        linkExternal,
        linkInternal,
        seo,
        contactForm,
        services,
        moduleServices,
        moduleAbout,
        moduleCallout,
        moduleContact,
        modulePortfolio,
        body,
        technologyTag,

        // Settings
        navigation,
        footer,
        contactInfo,
        social
    ]
}
