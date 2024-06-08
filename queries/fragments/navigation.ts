import groq from "groq";
import { LINK_EXTERNAL } from "./linkExternal";
import { LINK_INTERNAL } from "./linkInternal";
import { PAGE } from "./pages/page";

export const NAVIGATION = groq`
    *[_type == "navigation" && language == $language][0] {
        _id,
        "menuLinks": links[]  {
            (_type == 'linkExternal') => {
                ${LINK_EXTERNAL}
            },
            (_type == 'linkInternal') => {
                ${LINK_INTERNAL}
            },
            (_type == 'pages') => {
                _key,
                _type,
                title,
                collectionPages-> {
                    ${PAGE}
                }
            },
        }
    }
`;
