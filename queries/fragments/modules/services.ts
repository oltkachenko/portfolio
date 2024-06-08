import groq from "groq";
import { LINK_EXTERNAL } from "../linkExternal";
import { LINK_INTERNAL } from "../linkInternal";
import { SERVICES_PAGE } from "../pages/services";


export const MODULE_SERVICES = groq`
    title,
    subtitle,
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
