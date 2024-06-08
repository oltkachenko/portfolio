import { DocumentIcon, HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: HomeIcon,
    groups: [
        {
            name: 'seo',
            title: 'SEO',
            icon: DocumentIcon
        },
    ],
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your personal website.',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'overview',
            description:
                'Used both for the <meta> description tag for SEO, and the personal website subheader.',
            title: 'Description',
            type: 'array',
            of: [
                // Paragraphs
                defineArrayMember({
                lists: [],
                marks: {
                    annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                        {
                            name: 'href',
                            type: 'url',
                            title: 'Url',
                        },
                        ],
                    },
                    ],
                    decorators: [
                    {
                        title: 'Italic',
                        value: 'em',
                    },
                    {
                        title: 'Strong',
                        value: 'strong',
                    },
                    ],
                },
                styles: [],
                type: 'block',
                }),
            ],
            validation: (rule) => rule.max(155).required(),
        }),
        // // Modules
        defineField({
            name: 'modules',
            title: 'Modules',
            type: 'array',
            of: [
                {type: 'module.about'},
                {type: 'module.services'},
                {type: 'module.contact'},
                {type: 'module.callout'},
            ]
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo.home',
            group: 'seo',
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        })
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                subtitle: 'Home',
                title,
            }
        },
    },
})