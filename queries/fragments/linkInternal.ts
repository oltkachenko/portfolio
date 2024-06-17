import groq from "groq";

export const LINK_INTERNAL = groq`
    _key,
    _type,
    title,
    buttonStyle,
    ...reference-> {
        "documentType": _type,
        (_type == "home") => {
            "slug": "/",
        },
        (_type == "project") => {
            "slug": '/portfolio/' + slug.current,
        },
        (_type == "page") => {
            "slug": select(
                pageType != 'page-type' && pageType != null => '/' + slug.current,
                '/page/' + slug.current
            ),
        }
    }
`;
