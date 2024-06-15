import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.callout',
    title: 'Callout',
    type: 'object',
    icon: BulbOutlineIcon,
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
            name: 'text',
            title: 'Text',
            type: 'text',
            rows: 2,
            group: 'general',
            validation: (rule) => [
                rule.required(),
                rule.max(70).warning(`Callout length shouldn't be more than 70 characters.`),
            ],
        }),
        // Link
        defineField({
            name: 'links',
            title: 'Link',
            type: 'array',
            group: 'general',
            of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
            validation: (rule) => rule.max(1),
        }),
    ],
    preview: {
        select: {
        text: 'text',
        url: 'url',
        },
        prepare(selection) {
        const {text} = selection
        return {
            subtitle: 'Callout',
            title: text,
            media: BulbOutlineIcon,
        }
        },
    },
})
