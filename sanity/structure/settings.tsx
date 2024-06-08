import {CogIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'
import footer from '../schemas/singletons/footer'
import navigation from '../schemas/singletons/navigation'
import contactInfo from '../schemas/documents/contactInfo'

const group = {
    groupName: 'settings',
    title: 'Site Settings',
    itemsTitle: 'Settings Documents',
    items: [navigation, footer, contactInfo]
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
            .items(group.items.map((item: any) => {
                if (item.name !== 'contactInfo') {
                    return S.listItem()
                    .title(item.title)
                    .icon(item.icon)
                    .child(
                        S.document()
                        .title(item.title)
                        .schemaType(item.name)
                        .documentId(item.name))
                }
                return S.listItem()
                    .title(item.title)
                    .icon(item.icon)
                    .child(
                        S.documentTypeList('contactInfo').child((documentId, context) => {
                            const documentNode = context.structureContext.resolveDocumentNode({
                              documentId,
                              schemaType: 'contactInfo',
                            })
                    
                            return documentNode.views([...documentNode.getViews()])
                        }),
                    )
            }))    
    ),
)