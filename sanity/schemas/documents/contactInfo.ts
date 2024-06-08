import { ComponentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactInfo',
    title: 'Contact info',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        {
            name: 'value',
            title: 'Value',
            type: 'string'
        },
    ]
})