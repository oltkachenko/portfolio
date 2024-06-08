import groq from "groq";

export const FOOTER_COPYRIGHT = groq`
    *[_type == "footer"][0] {
        releaseDate,
        "copyright": copyright[_key == $language][0].value
    }
`;
