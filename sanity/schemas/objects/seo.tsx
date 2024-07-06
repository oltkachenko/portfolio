import {defineField} from 'sanity'

export default defineField({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'If empty, displays the document title',
            validation: (rule) =>
                rule.max(50).warning('Longer titles may be truncated by search engines'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            validation: (rule) =>
                rule.max(150).warning('Longer descriptions may be truncated by search engines'),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ]
})
