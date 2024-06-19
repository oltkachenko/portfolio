/**
 * This plugin contains all the logic for setting up the singletons
 */

import { definePlugin, type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/structure'

export const singletonPlugin = definePlugin((types: string[]) => {
    return {
        name: 'singletonPlugin',
        document: {
            // Hide 'Singletons (such as Home)' from new document options
            // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
            newDocumentOptions: (prev, { creationContext }) => {
                if (creationContext.type === 'global') {
                    return prev.filter(
                        (templateItem) => !types.includes(templateItem.templateId),
                    )
                }

                return prev
            },
            // Removes the "duplicate" action on the Singletons (such as Home)
            actions: (prev, { schemaType }) => {
                if (types.includes(schemaType)) {
                    return prev.filter(({ action }) => action !== 'duplicate')
                }

                return prev
            },
        },
    }
})

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
    typeDefArray: {
        singeltone: DocumentDefinition[]
        groupItems: { 
            groupName: string,
            title: string,
            itemsTitle: string,
            items: DocumentDefinition[] 
        }[]
    },
): StructureResolver => {
    return (S) => {
        const groupItems = typeDefArray.groupItems.map((group) => {
            return S.listItem()
                .title(group.title)
                .id(group.groupName)
                .child(
                    S.list()
                        .title(group.itemsTitle)
                        .items(group.items.map((item: any) => {
                            return S.listItem()
                                .title(item.title)
                                .icon(item.icon)
                                .child(
                                    S.document()
                                    .title(item.title)
                                    .schemaType(item.name)
                                    .documentId(item.name))
                        }))
                    )
        })
        
        const singletonItems = typeDefArray.singeltone.map((typeDef) => {
            return S.listItem()
                .title(typeDef.title!)
                .icon(typeDef.icon)
                .child(
                    S.editor()
                        .id(typeDef.name)
                        .title(typeDef.title!)
                        .schemaType(typeDef.name)
                        .documentId(typeDef.name),
                )
        })

        
            
                
        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter(
            (listItem) => {
                const singeltoneAndGroupItems: string[] = []

                typeDefArray.groupItems.map(groupItems => groupItems.items.map((item) => {
                    singeltoneAndGroupItems.push(item.name)
                }))
                typeDefArray.singeltone.map((singleton) => singeltoneAndGroupItems.push(singleton.name))

                return (!singeltoneAndGroupItems.includes(listItem.getId()!))
            }  
        )
        
        return S.list()
            .title('Content')
            .items([...groupItems, S.divider(), ...singletonItems, S.divider(), ...defaultListItems])
    }
}