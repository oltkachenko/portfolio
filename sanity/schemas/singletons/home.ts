import { DocumentIcon, HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: HomeIcon,
    groups: [
        { name: 'general', title: 'General', default: true },
        { name: 'seo', title: 'SEO', icon: DocumentIcon },
    ],
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            group: 'general',
            validation: (rule) => rule.required(),
        }),
        // Modules
        defineField({
            name: 'modules',
            title: 'Modules',
            type: 'array',
            of: [
                {type: 'module.about'},
                {type: 'module.services'},
                {type: 'module.contact'},
                {type: 'module.portfolio'},
                {type: 'module.callout'},
            ],
            group: 'general'
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo.home',
            group: 'seo',
        }),
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        })
    ],
    preview: {
        select: {
            language: 'language',
        },
        prepare({ language }) {
            return {
                subtitle: 'Home',
                title: 'Home ' + language,
            }
        },
    },
})