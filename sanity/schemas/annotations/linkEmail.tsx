/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */

import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Email link',
  name: 'annotationLinkEmail',
  type: 'object',
  icon: EnvelopeIcon,

  fields: [
    // Email
    {
      title: 'Email',
      name: 'email',
      type: 'email',
    },
  ]
})
