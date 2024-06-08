import groq from "groq";

import { HOME_PAGE } from "./fragments/pages/home";


export const HOME_PAGE_QUERY = `
    *[_type == 'home' && language == $language][0] {
        ${HOME_PAGE}
    }
`;
