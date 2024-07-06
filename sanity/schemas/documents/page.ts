import { isUniqueOtherThanLanguage } from '@/sanity/utils/validateSlug'
import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    type: 'document',
    name: 'page',
    title: 'Page',
    icon: DocumentIcon,
    groups: [
        { name: 'general', title: 'General', default: true },
        { name: 'seo', title: 'SEO', icon: DocumentIcon },
    ],
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
            group: 'general',
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
            group: 'general',
        }),
        defineField({
            type: 'string',
            name: 'pageType',
            title: 'Page Type',
            initialValue: 'page-type',
            options: {
                list: [
                    {title: 'Page', value: 'page-type'}
                ],
                layout: 'dropdown'
            },
            validation: (rule) => rule.required(),
            group: 'general',
        }),
        // Body
        defineField({
            name: 'body',
            title: 'Body',
            type: 'body',
            group: 'general',
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
            group: 'general',
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        })
    ]
})
