import groq from "groq";
import { SOCIAL } from "./social";

export const FOOTER = groq`
    *[_type == "footer"][0] {
        "copyright": {
            releaseDate,
            "text": copyright[_key == $language][0].value,
        },
        "logoText": coalesce(logoText[_key == $language][0].value, logoText[0].value),
        socialShow,
        social[] -> {
            ${SOCIAL}
        }
    }
`;
