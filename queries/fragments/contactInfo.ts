import groq from "groq";

export const CONTACT_INFO = groq`
    _id,
    _type,
    "title": title[_key == $language][0].value,
    type,
    value
`;
