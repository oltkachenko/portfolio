import groq from "groq";
import { PROJECT_PAGE } from "../pages/project";
import { COLOR_INPUT } from "../colorInput";
import { LINK_EXTERNAL } from "../linkExternal";
import { LINK_INTERNAL } from "../linkInternal";

export const MODULE_PORTFOLIO = groq`
    title,
    subtitle,
    headingAlignment,
    backgroundColor {
        ${COLOR_INPUT}
    },
    projectsList[] -> {
        ${PROJECT_PAGE}
    },
    links[] {
        (_type == 'linkExternal') => {
            ${LINK_EXTERNAL}
        },
        (_type == 'linkInternal') => {
            ${LINK_INTERNAL}
        },
    }
`;
