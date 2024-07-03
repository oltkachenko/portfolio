import groq from "groq";
import { PROJECT_PAGE } from "../pages/project";
import { COLOR_INPUT } from "../colorInput";
import { LINK_EXTERNAL } from "../links/linkExternal";
import { LINK_INTERNAL } from "../links/linkInternal";
import { LINK_PAGE } from "../links/linkPage";

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
