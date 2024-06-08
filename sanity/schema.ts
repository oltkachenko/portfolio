import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/singletons/home'
import footer from './schemas/singletons/footer'
import page from './schemas/documents/page'
import projects from './schemas/documents/projects'
import navigation from './schemas/singletons/navigation'
import linkExternal from './schemas/objects/linkExternal'
import linkInternal from './schemas/objects/linkInternal'
import seoHome from './schemas/objects/seo/home'
import moduleServices from './schemas/objects/module/services'
import moduleAbout from './schemas/objects/module/about'
import moduleCallout from './schemas/objects/module/callout'
import moduleContact from './schemas/objects/module/contact'
import services from './schemas/documents/services'
import body from './schemas/blocks/body'
import contactInfo from './schemas/documents/contactInfo'
import contactForm from './schemas/documents/contactForm'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Singletons
        home,
        footer,
        navigation,
        page,
        projects,
        linkExternal,
        linkInternal,
        seoHome,
        contactForm,
        services,
        moduleServices,
        moduleAbout,
        moduleCallout,
        moduleContact,
        body,
        contactInfo,
        
    ]
}
