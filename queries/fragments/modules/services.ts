import groq from "groq";
import { LINK_EXTERNAL } from "../links/linkExternal";
import { LINK_INTERNAL } from "../links/linkInternal";
import { SERVICES_PAGE } from "../pages/services";
import { COLOR_INPUT } from "../colorInput";
import { LINK_PAGE } from "../links/linkPage";


export const MODULE_SERVICES = groq`
    title,
    subtitle,
    headingAlignment,
    backgroundColor {
        ${COLOR_INPUT}
    },
    servicesList[] -> {
        ${SERVICES_PAGE}
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
