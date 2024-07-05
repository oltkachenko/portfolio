import {UserIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.about',
    title: 'About me',
    type: 'object',
    icon: UserIcon,
    groups: [
        {name: 'general', title: 'General', default: true},
        {name: 'download', title: 'Files'},
        {name: 'social', title: 'Social'}
    ],
    fields: [
        // Text
        defineField({
            name: 'title',
            title: 'Title',
            description: 'This field is the title of about section.',
            type: 'string',
            group: 'general'
        }),
        // Body
        defineField({
            name: 'body',
            title: 'Body',
            type: 'body',
            group: 'general'
        }),
        // Contact info
        defineField({
            name: 'contactInfo',
            title: 'Contact Info',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'contactInfo'}],
                }
            ],
            group: 'general'
        }),
        // Image
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            validation: (rule) => rule.required(),
            group: 'general',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ],
        }),
        // Download files
        defineField({
            name: 'linkName',
            title: 'Download link name',
            type: 'string',
            group: 'download'
        }),
        defineField({
            name: 'file',
            title: 'PDF file',
            type: 'file',
            options: {
                accept: 'application/pdf'
            },
            fields: [
                {
                  name: 'description',
                  type: 'string',
                  title: 'Description'
                }
            ],
            group: 'download'
        }),
        // Social
        defineField({
            name: 'socialShow',
            title: 'Show social network',
            type: 'boolean',
            group: 'social'
        }),
        defineField({
            name: 'social',
            title: 'Social networks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'social'}],
                }
            ],
            group: 'social'
        }),
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection) {
            const {title} = selection
            return {
                subtitle: 'About me',
                title: title,
                media: UserIcon,
            }
        },
    },
})
