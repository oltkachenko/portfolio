import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    type: 'document',
    name: 'technologyTag',
    title: 'Technology Tags',
    icon: DocumentIcon,
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Icon',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ],
        }),
    ],
})