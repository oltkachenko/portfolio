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
                    name: 'pages',
                    title: 'Page',
                    type: 'object',
                    icon: PackageIcon,
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'collectionPages',
                            title: 'Collection Page',
                            type: 'reference',
                            description: 'Page from this collection will be listed',
                            weak: true,
                            to: [{type: 'page'}, {type: 'home'}],
                            options: {
                                filter: ({ document }) => {
                                    return {
                                        filter: 'language == $language || _type == "home"',
                                        params: { 
                                            language: document.language
                                        },
                                    }
                                },
                                disableNew: true,
                            },
                        },
                    ],
                    preview: {
                        select: {
                            customTitle: 'title',
                            title: 'collectionPages.title',
                        },
                        prepare(selection) {
                            const {title, customTitle} = selection
                            return {
                                title: customTitle || title
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