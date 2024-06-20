import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'

import {PAGE_REFERENCES} from '../../constants'

export default defineField({
    title: 'Internal Link',
    name: 'linkInternal',
    type: 'object',
    icon: LinkIcon,
    fields: [
        // Title
        {
            title: 'Title',
            name: 'title',
            type: 'string'
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
        // Reference
        {
            name: 'reference',
            type: 'reference',
            weak: true,
            validation: (rule) => rule.required(),
            to: PAGE_REFERENCES,
            options: {
                    disableNew: true,
                    filter: ({document}) => {
                        let filterType: string[] = []

                        PAGE_REFERENCES.map(page => {
                            filterType.push(`_type == "${page.type}"`)
                        })
                        
                        return {
                            filter: `(${filterType.join(' || ')}) && language == $language`,
                            params: { language: document.language },
                        }
                    },
            },
        },
    ],
    preview: {
        select: {
            reference: 'reference',
            referenceTitle: 'reference.title',
            referenceType: 'reference._type',
            title: 'title',
        },
        prepare(selection) {
            const {
                reference,
                referenceTitle,
                title,
            } = selection

            const subtitle = []
            if (reference) {
                subtitle.push([`→ ${referenceTitle || reference?._id}`])
            } else {
                subtitle.push('(Nonexistent document reference)')
            }

            return {
                // media: image,
                subtitle: subtitle.join(' '),
                title: title || referenceTitle,
            }
        },
    },
})
