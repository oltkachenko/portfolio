import { ComponentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'social',
    title: 'Social',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Social network name',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            description: 'Social network link',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Social network image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ],
            validation: (rule) => rule.required().assetRequired(),
        }),
    ]
})