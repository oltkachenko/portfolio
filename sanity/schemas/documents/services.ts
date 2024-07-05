import { isUniqueOtherThanLanguage } from '@/sanity/utils/validateSlug'
import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    type: 'document',
    name: 'services',
    title: 'Services',
    icon: DocumentIcon,
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: isUniqueOtherThanLanguage,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'showDetailsLink',
            title: 'Show details link',
            type: 'boolean',
        }),
        defineField({
            name: 'detailsLink',
            title: 'Details link value',
            type: 'array',
            of: [{ type: 'linkExternal' }],
            validation: (rule) => rule.max(1),
        }),
        defineField({
            type: 'internationalizedArrayText',
            name: 'description',
            title: 'Description',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Icon',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ],
        })
    ]
})