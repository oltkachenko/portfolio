import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.contact',
    title: 'Contact Form',
    type: 'object',
    icon: EnvelopeIcon,
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
            type: 'text'
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
        })
    ],
    preview: {
        select: {
            title: 'title',
            url: 'url',
        },
        prepare(selection) {
            const {title} = selection
            return {
                subtitle: 'Contact Form',
                title: title,
                media: EnvelopeIcon,
            }
        },
    },
})
