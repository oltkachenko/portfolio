import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Technology Tags')
    .icon(DocumentsIcon)
    .schemaType('technologyTag')
    .child(
        S.documentTypeList('technologyTag').child((documentId, context) => {
            const documentNode = context.structureContext.resolveDocumentNode({
              documentId,
              schemaType: 'technologyTag',
            })
    
            return documentNode.views([...documentNode.getViews()])
        }),
    ),
)
