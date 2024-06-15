import {ProjectsIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.portfolio',
    title: 'Portfolio',
    type: 'object',
    icon: ProjectsIcon,
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
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            description: 'This field is the title of about section.',
            type: 'string',
            group: 'general'
        }),
        // Subtitle
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            description: 'This field is the subtitle of module section.',
            type: 'text',
            rows: 2,
            group: 'general'
        }),
        // Services List
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
