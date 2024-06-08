import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Services')
    .icon(DocumentsIcon)
    .schemaType('services')
    .child(
        S.documentTypeList('services').child((documentId, context) => {
            const documentNode = context.structureContext.resolveDocumentNode({
              documentId,
              schemaType: 'services',
            })
    
            return documentNode.views([...documentNode.getViews()])
        }),
    ),
)
