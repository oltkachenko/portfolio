import groq from "groq";

export const PAGE = groq`
    _id,
    _type,
    "slug": select(
        pageType != 'page-type' && pageType != null => '/' + slug.current,
        '/page/' + slug.current
    ),
    title,
    pageType
`;
