import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Projects')
    .icon(DocumentsIcon)
    .schemaType('projects')
    .child(
        S.documentTypeList('projects').child((documentId, context) => {
            const documentNode = context.structureContext.resolveDocumentNode({
              documentId,
              schemaType: 'projects',
            })
    
            return documentNode.views([...documentNode.getViews()])
        }),
    ),
)
