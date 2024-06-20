import { isUniqueOtherThanLanguage } from '@/sanity/utils/validateSlug'
import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'Enter a brief but descriptive title',
            title: 'Project title',
            type: 'string',
            validation: (rule) => rule.required()
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
            name: 'role',
            description: 'e.g., Front-end engineer or Marketing analyst',
            title: 'Your role',
            type: 'string'
        }),
        defineField({
            name: 'description',
            description: "Briefly describe the project's goals, your solution and the impact you made here",
            title: 'Project description',
            type: 'body',
        }),
        defineField({
            name: 'skills',
            description: 'Type to add skills relevant to this project',
            title: 'Skills and deliverables',
            type: 'string'
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
