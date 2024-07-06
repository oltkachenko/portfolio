import { isUniqueOtherThanLanguage } from '@/sanity/utils/validateSlug'
import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: DocumentIcon,
    groups: [
        { name: 'general', title: 'General', default: true },
        { name: 'seo', title: 'SEO', icon: DocumentIcon },
    ],
    fields: [
        defineField({
            name: 'title',
            description: 'Enter a brief but descriptive title',
            title: 'Project title',
            type: 'string',
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
            name: 'category',
            title: 'Category',
            type: 'string',
            initialValue: 'web-development',
            options: {
                list: [
                    {title: 'Web Development', value: 'web-development'},
                    {title: 'Branding', value: 'branding'},
                ],
                layout: 'dropdown'
            },
            validation: (rule) => rule.required(),
            group: 'general',
        }),
        defineField({
            name: 'role',
            description: 'e.g., Front-end engineer or Marketing analyst',
            title: 'Your role',
            type: 'string',
            group: 'general',
        }),
        defineField({
            name: 'shortDescription',
            description: "Briefly describe the project",
            title: 'Short description',
            type: 'text',
            rows: 2,
            group: 'general',
        }),
        defineField({
            name: 'description',
            description: "Briefly describe the project's goals, your solution and the impact you made here",
            title: 'Project description',
            type: 'body',
            group: 'general',
        }),
        defineField({
            name: 'skills',
            description: 'Type to add skills relevant to this project',
            title: 'Skills and deliverables',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'technologyTag'}],
                }
            ],
            group: 'general',
        }),
        defineField({
            name: 'tileImage',
            type: 'image',
            title: 'Tile image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ],
            validation: (rule) => rule.required().assetRequired(),
            group: 'general',
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
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
