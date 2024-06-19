import type {SlugValidationContext} from 'sanity'
import {getIdPair} from 'sanity'

export async function isUniqueOtherThanLanguage(slug: string, context: SlugValidationContext) {
    const {document, getClient} = context
    if (!document?.language) {
        return true
    }
    const client = getClient({apiVersion: '2023-04-24'})
    const {draftId, publishedId} = getIdPair(document._id)
    const params = {
        draft: draftId,
        published: publishedId,
        language: document.language,
        slug,
    }
    const query = `!defined(*[
        !(_id in [$draft, $published]) &&
        slug.current == $slug &&
        language == $language
    ][0]._id)`
    const result = await client.fetch(query, params)
    return result
}
