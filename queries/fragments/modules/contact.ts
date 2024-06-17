import groq from "groq";
import { CONTACT_INFO } from "../contactInfo";
import { PORTABLE_TEXT } from "../portableText/portableText";
import { COLOR_INPUT } from "../colorInput";

export const MODULE_CONTACT = groq`
	title,
    subtitle,
    headingAlignment,
    backgroundColor {
        ${COLOR_INPUT}
    },
    body[]{
        ${PORTABLE_TEXT}
    },
    contactInfo[] -> {
        ${CONTACT_INFO}
    }
`;
