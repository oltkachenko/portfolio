import {ProjectsIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.portfolio',
    title: 'Portfolio',
    type: 'object',
    icon: ProjectsIcon,
    groups: [
        {name: 'general', title: 'General', default: true},
        {name: 'heading', title: 'Heading'},
        {name: 'footer', title: 'Footer'},
        {name: 'styling', title: 'Style'},
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
            description: 'This field is the title of about section.',
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
            of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
            validation: (rule) => rule.max(2),
        }),
        // Projects List
        defineField({
            name: 'projectsList',
            title: 'Projects',
            description: 'Projects list',
            type: 'array',
            group: 'general',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'project'}]
                }
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection) {
            const {title} = selection
            return {
                subtitle: 'Portfolio',
                title: title,
                media: ProjectsIcon,
            }
        },
    },
})
