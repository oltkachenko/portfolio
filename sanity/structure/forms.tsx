import {TiersIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Forms')
    .id('forms')
    .icon(TiersIcon)
    .child(
        S.list()
            .title('Forms')
            .id('forms')
            .items([
                S.listItem()
                .title('Contact form')
                .child(
                    S.documentTypeList('contactForm').child((documentId, context) => {
                        const documentNode = context.structureContext.resolveDocumentNode({
                          documentId,
                          schemaType: 'contactForm',
                        })
                
                        return documentNode.views([...documentNode.getViews()])
                    }),
                ),
            ])    
    )
)

