import { MenuIcon, PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: MenuIcon,
    fields: [
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
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
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'pageType'
                        },
                        prepare(selection) {
                            const {title, subtitle} = selection

                            console.log(selection);
                            
                
                            return {
                                // media: image,
                                subtitle: `→ ${subtitle}`,
                                title: title,
                            }
                        },
                    },
                },
                {type: 'linkInternal'},
                {type: 'linkExternal'},
            ],
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        })
    ]
})