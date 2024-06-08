import {defineField} from 'sanity'
import annotationLinkExternal from "../annotations/linkExternal"
import annotationLinkInternal from "../annotations/linkInternal"
import annotationLinkEmail from "../annotations/linkEmail"

export default defineField({
    name: 'body',
    title: 'Body',
    type: 'array',
    of: [
        {
            type: 'block',
            lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Numbered', value: 'number'},
            ],
            marks: {
                decorators: [
                    {
                        title: 'Italic',
                        value: 'em',
                    },
                    {
                        title: 'Strong',
                        value: 'strong',
                    },
                ],
                annotations: [
                    annotationLinkExternal,
                    annotationLinkInternal,
                    annotationLinkEmail
                ],
            },
            
        },
        {
            name: 'blockCallout',
            type: 'module.callout',
        },
    ],
})
