import groq from "groq";

import { PROJECT_PAGE } from "../fragments/pages/project";

export const PROJECT_SLUG_QUERY = groq`
    *[_type == "project" && slug.current == $slug && language == $language] | order(_updatedAt desc) [0]{
        ${PROJECT_PAGE}
    }
`;
