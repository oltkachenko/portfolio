import groq from "groq";

import { PAGE } from "../fragments/pages/page";

export const PAGE_SLUG_QUERY = groq`
    *[
        _type == "page" 
        && slug.current == $slug 
        && language == $language 
        && !(_id in path("drafts.**"))
    ] | order(_updatedAt desc) [0]{
        ${PAGE}
    }
`;
