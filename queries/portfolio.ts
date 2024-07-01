import groq from "groq";

import { PROJECT_PAGE } from "./fragments/pages/project";


export const PORTFOLIO_PAGE_QUERY = groq`
    *[_type == 'project' && language == $language && !(_id in path("drafts.**"))] {
        ${PROJECT_PAGE}
    }
`;
