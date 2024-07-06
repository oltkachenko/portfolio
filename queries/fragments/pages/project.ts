import groq from "groq";
import { PORTABLE_TEXT } from "../portableText/portableText";
import { IMAGE } from "../image";
import { TECHNOLOGY_TAG } from "../technologyTag";
import { SEO } from "../seo";

export const PROJECT_PAGE = groq`
    _id,
    _type,
    title,
    "slug": "/portfolio/" + slug.current,
    category,
    role,
    shortDescription,
    description[]{
        ${PORTABLE_TEXT}
    },
    skills[] -> {
        ${TECHNOLOGY_TAG}
    },
    tileImage {
        ${IMAGE}
    },
    ${SEO},
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
