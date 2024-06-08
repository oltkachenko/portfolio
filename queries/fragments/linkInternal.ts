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
        (_type == "page") => {
            "slug": "/page/" + slug.current,
        }
    }
`;
