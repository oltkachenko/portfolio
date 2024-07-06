import groq from "groq";
import { LINK_EXTERNAL } from "./links/linkExternal";
import { LINK_INTERNAL } from "./links/linkInternal";
import { SEO } from "./seo";

export const NAVIGATION = groq`
    *[_type == "navigation" && language == $language && !(_id in path("drafts.**"))][0] {
        _id,
        "menuLinks": links[]  {
            (_type == 'linkPage') => {
                _key,
                _type,
                title,
                pageType,
                "slug": select(
                    pageType == 'portfolio' => '/portfolio',
                    pageType == 'services' => '/services'
                ),
                ${SEO}
            },
            (_type == 'linkExternal') => {
                ${LINK_EXTERNAL}
            },
            (_type == 'linkInternal') => {
                ${LINK_INTERNAL}
            }
        }
    }
`;
