import groq from "groq";

import { SERVICES_PAGE } from "./fragments/pages/services";

export const SERVICES_PAGE_QUERY = groq`
    *[_type == 'services'] | order(_updatedAt desc) [0]{
        ${SERVICES_PAGE}
    }
`;
