import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
    S.listItem()
        .title('Projects')
        .icon(DocumentsIcon)
        .schemaType('project')
        .child(
            S.documentTypeList('project')
                .title('Projects')
                .child((documentId, context) => {
                    const documentNode = context.structureContext.resolveDocumentNode({
                        documentId,
                        schemaType: 'project',
                    })
            
                    return documentNode.views([...documentNode.getViews()])
                }),
        ),
)
