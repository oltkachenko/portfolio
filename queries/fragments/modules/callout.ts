import groq from "groq";

import { LINK_EXTERNAL } from "../links/linkExternal";
import { LINK_INTERNAL } from "../links/linkInternal";
import { LINK_PAGE } from "../links/linkPage";

export const MODULE_CALLOUT = groq`
	title,
    subtitle,
    alignment,
    links[] {
        (_type == 'linkPage') => {
            ${LINK_PAGE}
        },
        (_type == 'linkExternal') => {
            ${LINK_EXTERNAL}
        },
        (_type == 'linkInternal') => {
            ${LINK_INTERNAL}
        },
    }
`;
