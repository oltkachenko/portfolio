import groq from "groq";

export const PAGE = groq`
    _id,
    _type,
    "slug": select(
        pageType == 'portfolio-type' => '/portfolio/' + slug.current,
        pageType == 'services-type' => '/services/' + slug.current,
        pageType == 'page-type' || pageType == null => '/page/' + slug.current,
        '/page/' + slug.current
    ),
    title,
    pageType
`;
