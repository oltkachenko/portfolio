import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    type: 'document',
    name: 'page',
    title: 'Page',
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
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'pageType',
            title: 'Page Type',
            initialValue: 'page-type',
            options: {
                list: [
                    {title: 'Page', value: 'page-type'},
                    {title: 'Services', value: 'services-type'},
                    {title: 'Portfolio', value: 'portfolio-type'}
                ],
                layout: 'dropdown'
            },
            validation: (rule) => rule.required(),
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