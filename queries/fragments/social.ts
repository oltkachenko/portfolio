import groq from "groq";
import { IMAGE } from "./image";

export const SOCIAL = groq`
    _id,
    _type,
    title,
    link,
    image {
        ${IMAGE}
    },
`;
