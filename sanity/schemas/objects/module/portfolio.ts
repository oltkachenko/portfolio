import {ProjectsIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.portfolio',
    title: 'Portfolio',
    type: 'object',
    icon: ProjectsIcon,
    fields: [
        // Text
        defineField({
            name: 'title',
            title: 'Title',
            description: 'This field is the title of about section.',
            type: 'string',
        }),
        // Services List
        defineField({
            name: 'projectsList',
            title: 'Projects',
            description: 'Projects list',
            type: 'array',
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
