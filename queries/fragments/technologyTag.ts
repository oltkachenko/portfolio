import groq from "groq";
import { IMAGE } from "./image";

export const TECHNOLOGY_TAG = groq`
    _id,
    _type,
    title,
    image {
        ${IMAGE}
    }
`;
