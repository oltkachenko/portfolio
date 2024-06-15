import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.contact',
    title: 'Contact Form',
    type: 'object',
    icon: EnvelopeIcon,
    groups: [
        {name: 'general', title: 'General', default: true},
        {name: 'styling', title: 'Style'}
    ],
    fields: [
        // Color
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'simplerColor',
            group: 'styling'
        }),
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
            group: 'general',
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
