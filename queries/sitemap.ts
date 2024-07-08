import groq from "groq";

export const SITEMAP_PAGE_QUERY = groq`
    *[
        (_type == "page"
        || _type == "project")
        && !(_id in path("drafts.**"))
    ] {
        _updatedAt,
        language,
        (_type == "page") => {
            "slug": select(
                pageType == 'page-type' || pageType == null => '/page/' + slug.current,
                '/page/' + slug.current
            ),
        },
        (_type == "project") => {
            "slug": "/portfolio/" + slug.current,
        },
    }
`;