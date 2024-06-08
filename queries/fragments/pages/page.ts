import groq from "groq";

export const PAGE = groq`
    _id,
    _type,
    "slug": "/page/" + slug.current,
    title,
`;
