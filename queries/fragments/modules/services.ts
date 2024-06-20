import groq from "groq";
import { LINK_EXTERNAL } from "../linkExternal";
import { LINK_INTERNAL } from "../linkInternal";
import { SERVICES_PAGE } from "../pages/services";
import { COLOR_INPUT } from "../colorInput";


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
        (_type == 'linkExternal') => {
            ${LINK_EXTERNAL}
        },
        (_type == 'linkInternal') => {
            ${LINK_INTERNAL}
        },
    }
`;
