import {CogIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'
import footer from '../schemas/singletons/footer'
import navigation from '../schemas/singletons/navigation'
import contactInfo from '../schemas/documents/contactInfo'
import social from '../schemas/documents/social'

const group = {
    groupName: 'settings',
    title: 'Site Settings',
    itemsTitle: 'Settings Documents',
    items: [
        { type: 'singletone', document: navigation },
        { type: 'singletone', document: footer},
        { type: 'document', document: contactInfo },
        { type: 'document', document: social }
    ]
}


export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Settings')
    .id('settings')
    .icon(CogIcon)
    .child(
        S.list()
            .title('Settings')
            .id('settings')
            .items(group.items.map((item: any, index) => {
                if (item.type === 'document') {
                    return S.listItem()
                        .title(item.document.title)
                        .icon(item.document.icon)
                        .child(
                            S.documentTypeList(item.document.name).child((documentId, context) => {
                                const documentNode = context.structureContext.resolveDocumentNode({
                                documentId,
                                schemaType: item.document.name,
                                })
                        
                                return documentNode.views([...documentNode.getViews()])
                            }),
                        )
                }

                return S.listItem()
                    .title(item.document.title)
                    .id(item.document.name + index)
                    .icon(item.document.icon)
                    .child(
                        S.document()
                        .title(item.title)
                        .schemaType(item.document.name)
                        .documentId(item.document.name)
                    )
            }))    
    ),
)