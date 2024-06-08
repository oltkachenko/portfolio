import groq from "groq";

import { MODULES } from "../modules";
import { SEO } from "../seo";

export const HOME_PAGE = groq`
    modules[] {
        ${MODULES}
    },
    ${SEO}
`;
