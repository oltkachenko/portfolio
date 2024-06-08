import {UserIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.about',
    title: 'About me',
    type: 'object',
    icon: UserIcon,
    fields: [
        // Text
        defineField({
            name: 'title',
            title: 'Title',
            description: 'This field is the title of about section.',
            type: 'string'
        }),
        // Body
        defineField({
            name: 'body',
            title: 'Body',
            type: 'body'
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
            ]
        }),
        // Image
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            url: 'url',
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
