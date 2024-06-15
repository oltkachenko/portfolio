import {CogIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.services',
    title: 'Services',
    type: 'object',
    icon: CogIcon,
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
            description: 'This field is the title of module section.',
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
        // Link
        defineField({
            name: 'links',
            title: 'Link',
            description: 'Set list of links',
            type: 'array',
            group: 'general',
            of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
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
                    to: [{type: 'services'}],
                    //   options: {
                    //     disableNew: true,
                    //     filter: () => {
                    //         return {
                    //           filter: '_type == "services" && _id == $language',
                    //           params: { language: '17db4f9c-6ced-4de2-b058-7a3134a1d7f9' },
                    //         }
                    //     },
                    //   },
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
