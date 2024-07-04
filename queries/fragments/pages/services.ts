import groq from "groq";

import { IMAGE } from "../image";
import { LINK_EXTERNAL } from "../links/linkExternal";

export const SERVICES_PAGE = groq`
    _id,
    _type,
    title,
    "slug": "/services/" + slug.current,
    showDetailsLink,
    detailsLink[] {
        (_type == 'linkExternal') => {
            ${LINK_EXTERNAL}
        }
    },
    "description": coalesce(description[_key == $language][0], description[0]) {
        value
    },
    image {
        ${IMAGE}
    },
`;
