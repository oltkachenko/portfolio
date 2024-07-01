import { PackageIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default defineField({
    name: 'linkPage',
    title: 'Page',
    type: 'object',
    icon: PackageIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            type: 'string',
            name: 'pageType',
            title: 'Page Type',
            initialValue: 'portfolio',
            options: {
                list: [
                    {title: 'Services', value: 'services'},
                    {title: 'Portfolio', value: 'portfolio'}
                ],
                layout: 'dropdown'
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'buttonStyle',
            title: 'Button Style',
            type: 'string',
            options: {
                list: [
                    {title: 'Link', value: 'link-style'},
                    {title: 'Button', value: 'button-style'}
                ],
                layout: 'dropdown'
            }
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'pageType'
        },
        prepare(selection) {
            const {title, subtitle} = selection

            return {
                // media: image,
                subtitle: `→ ${subtitle}`,
                title: title,
            }
        },
    },
})
