import groq from "groq";
import { PORTABLE_TEXT } from "../portableText/portableText";
import { IMAGE } from "../image";

export const PROJECT_PAGE = groq`
    _id,
    _type,
    title,
    "slug": "/portfolio/" + slug.current,
    role,
    description[]{
        ${PORTABLE_TEXT}
    },
    skills,
    images[] {
        "image": {
            ${IMAGE}
        },
    },
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        "slug": slug.current,
        language
    },
`;
