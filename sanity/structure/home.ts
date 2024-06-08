import {HomeIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .id('home')
    .icon(HomeIcon)
    .child(
        S.editor()
        .id('home')
        .title('Home')
        .schemaType('home')
        .documentId('home'),
    ),
)