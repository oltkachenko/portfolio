import groq from "groq";

import { MODULE_SERVICES } from "./modules/services";
import { MODULE_CALLOUT } from "./modules/callout";
import { MODULE_ABOUT } from "./modules/about";
import { MODULE_CONTACT } from "./modules/contact";
import { MODULE_PORTFOLIO } from "./modules/portfolio";
import { COLOR_INPUT } from "./colorInput";

export const MODULES = groq`
    _key,
    _type,
    backgroundColor {
        ${COLOR_INPUT}
    },
    (_type == "module.services") => {
        ${MODULE_SERVICES}
    },
    (_type == "module.callout") => {
        ${MODULE_CALLOUT}
    },
    (_type == "module.about") => {
        ${MODULE_ABOUT}
    },
    (_type == "module.contact") => {
        ${MODULE_CONTACT}
    },
    (_type == "module.portfolio") => {
        ${MODULE_PORTFOLIO}
    }
`;
