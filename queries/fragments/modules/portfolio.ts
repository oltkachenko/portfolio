import groq from "groq";
import { PROJECT_PAGE } from "../pages/project";

export const MODULE_PORTFOLIO = groq`
    title,
    subtitle,
    projectsList[] -> {
        ${PROJECT_PAGE}
    },
`;
