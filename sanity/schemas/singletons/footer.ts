import { ComponentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        defineField({
            name: 'copyright',
            title: 'Copyright',
            type: 'internationalizedArrayString',
            description: 'Footer copyright',
        }),
        {
            name: 'releaseDate',
            title: 'Release date',
            type: 'date',
            description: 'Website launch date'
        },
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        })
    ]
})