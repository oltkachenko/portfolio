import { ComponentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: ComponentIcon,
    groups: [
        { name: 'general', title: 'General', default: true },
        { name: 'copyright', title: 'Copyright' },
    ],
    fields: [
        defineField({
            name: 'copyright',
            title: 'Copyright',
            type: 'internationalizedArrayString',
            description: 'Footer copyright',
            group: 'copyright'
        }),
        defineField({
            name: 'releaseDate',
            title: 'Release date',
            type: 'date',
            description: 'Website launch date',
            group: 'copyright'
        }),
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'logoText',
            title: 'Logo text',
            type: 'internationalizedArrayString',
            group: 'general'
        }),
        // Social
        defineField({
            name: 'socialShow',
            title: 'Show social network',
            type: 'boolean',
            group: 'general'
        }),
        defineField({
            name: 'social',
            title: 'Social networks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'social'}],
                }
            ],
            group: 'general'
        }),
    ]
})