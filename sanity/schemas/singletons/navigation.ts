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
                {type: 'linkPage'},
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