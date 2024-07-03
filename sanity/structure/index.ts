import {ListItemBuilder, StructureResolver} from 'sanity/structure'

import home from './home'
import page from './pages'
import settings from './settings'
import projects from './projects'
import services from './services'
import forms from './forms'
import technologyTag from './technologyTag'
import social from '../schemas/documents/social'

/**
 * Desk structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom desk structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schemas progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = [
    'home',
    'page',
    'settings',
    "footer",
    "navigation",
    'project',
    'services',
    // 'translation.metadata',
    'media.tag',
    'contactInfo',
    'contactForm',
    'technologyTag',
    'social'
]

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
        home(S, context),
        page(S, context),
        S.divider(),
        projects(S, context),
        services(S, context),
        S.divider(),
        technologyTag(S, context),
        S.divider(),
        forms(S, context),
        settings(S, context),
        S.divider(),
        // Automatically add new document types to the root pane
        ...S.documentTypeListItems().filter(
            (listItem: ListItemBuilder) =>
            // @ts-expect-error Object is possibly 'undefined'
            !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId().toString()) 
        ),
    ])
