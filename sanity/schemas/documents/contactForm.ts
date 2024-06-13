import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactForm',
    title: 'Contact Form',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
        name: 'name',
        title: 'User Name',
        type: 'string',
        validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) =>
                Rule.regex(
                    // /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    {
                        name: "email",
                        invert: false,
                    }
                ),
        }),
        defineField({
            name: 'subject',
            title: 'Subject',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date & time',
            type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'locale',
            title: 'Locale',
            type: 'string',
            readOnly: true
        })
    ]
})