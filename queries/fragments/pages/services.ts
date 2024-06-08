import groq from "groq";

import { IMAGE } from "../image";

export const SERVICES_PAGE = groq`
    _id,
    _type,
    title,
    "description": coalesce(description[_key == $language][0], description[0]) {
        value
    },
    image {
        ${IMAGE}
    },
`;
