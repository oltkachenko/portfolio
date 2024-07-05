import { ComponentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactInfo',
    title: 'Contact info',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
        }),
        defineField({
            name: 'value',
            title: 'Value',
            type: 'internationalizedArrayString'
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Text', value: 'text'},
                    {title: 'Email', value: 'email'},
                    {title: 'Phone', value: 'tel'}
                ],
                layout: 'radio',
                direction: "horizontal",
            },
        }),
    ],
    
    preview: {
        select: {
            title: 'title',
            value: 'value',
        },
        prepare(selection) {
            const {title, value} = selection
            
            return {
                title: title[0].value,
                subtitle: value[0].value,
                media: ComponentIcon,
            }
        },
    },
})