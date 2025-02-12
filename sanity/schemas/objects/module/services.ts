import {CogIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.services',
    title: 'Services',
    type: 'object',
    icon: CogIcon,
    groups: [
        {name: 'general', title: 'General', default: true},
        {name: 'heading', title: 'Heading'},
        {name: 'footer', title: 'Footer'},
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
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            description: 'This field is the title of module section.',
            type: 'string',
            group: 'heading'
        }),
        // Subtitle
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            description: 'This field is the subtitle of module section.',
            type: 'text',
            rows: 2,
            group: 'heading'
        }),
        // Heading Alignment
        defineField({
            name: 'headingAlignment',
            title: 'Heading Alignment',
            type: 'string',
            initialValue: 'center',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'}
                ],
                layout: 'dropdown'
            },
            group: 'heading'
        }),
        // Link
        defineField({
            name: 'links',
            title: 'Link',
            description: 'Set list of links',
            type: 'array',
            group: 'footer',
            of: [
                {type: 'linkPage'},
                {type: 'linkInternal'},
                {type: 'linkExternal'}
            ],
            validation: (rule) => rule.max(2),
        }),
        // Services List
        defineField({
            name: 'servicesList',
            title: 'Services',
            description: 'Services list',
            type: 'array',
            group: 'general',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'services'}]
                }
                
            ],
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
                subtitle: 'Services',
                title: title,
                media: CogIcon,
            }
        },
    },
})
