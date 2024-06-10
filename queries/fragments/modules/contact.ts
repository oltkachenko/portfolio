import groq from "groq";
import { CONTACT_INFO } from "../contactInfo";
import { PORTABLE_TEXT } from "../portableText/portableText";

export const MODULE_CONTACT = groq`
	title,
    body[]{
        ${PORTABLE_TEXT}
    },
    contactInfo[] -> {
        ${CONTACT_INFO}
    }
`;
