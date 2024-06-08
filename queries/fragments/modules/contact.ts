import groq from "groq";
import { CONTACT_INFO } from "../contactInfo";

export const MODULE_CONTACT = groq`
	title,
    body,
    contactInfo[] -> {
        ${CONTACT_INFO}
    }
`;
