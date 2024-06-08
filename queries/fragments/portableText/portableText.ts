import groq from "groq";

import { MODULE_CALLOUT } from "../modules/callout";
import { MARK_DEFS } from "./markDefs";

// We check the _type for backwards compatibility with the old block type names.
export const PORTABLE_TEXT = groq`
    ...,
    (_type == 'blockCallout' || _type == 'module.callout') => {
        '_type': 'module.callout',
        ${MODULE_CALLOUT}
    },
    markDefs[] {
        ${MARK_DEFS}
    }
`;
