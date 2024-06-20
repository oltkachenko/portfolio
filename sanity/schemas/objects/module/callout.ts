import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.callout',
    title: 'Callout',
    type: 'object',
    icon: BulbOutlineIcon,
    fields: [
        // Text
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2,
            validation: (rule) => [
                rule.required(),
                rule.max(70).warning(`Callout length shouldn't be more than 70 characters.`),
            ],
        }),
        // Subtitle
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            description: 'This field is the subtitle of module section.',
            type: 'text',
            rows: 2,
        }),
        // Alignment
        defineField({
            name: 'alignment',
            title: 'Alignment',
            type: 'string',
            initialValue: 'center',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'}
                ],
                layout: 'dropdown'
            }
        }),
        // Link
        defineField({
            name: 'links',
            title: 'Link',
            type: 'array',
            of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
            validation: (rule) => rule.max(2),
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
                subtitle: 'Callout',
                title: title,
                media: BulbOutlineIcon,
            }
        },
    },
})
