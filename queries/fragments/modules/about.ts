import groq from "groq";
import { IMAGE } from "../image";
import { PORTABLE_TEXT } from "../portableText/portableText";
import { CONTACT_INFO } from "../contactInfo";

export const MODULE_ABOUT = groq`
	title,
    linkName,
    image {
        ${IMAGE}
    },
    body[]{
        ${PORTABLE_TEXT}
    },
    contactInfo[] -> {
        ${CONTACT_INFO}
    },
    file {
        _type,
        description,
        "fileUrl": asset->url
    }
`;
