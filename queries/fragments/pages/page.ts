import groq from "groq";
import { MODULES } from "../modules";
import { PORTABLE_TEXT } from "../portableText/portableText";

export const PAGE = groq`
    _id,
    _type,
    "slug": select(
        pageType == 'page-type' || pageType == null => '/page/' + slug.current,
        '/page/' + slug.current
    ),
    title,
    pageType,
    body[]{
        ${PORTABLE_TEXT}
    },
    modules[] {
        ${MODULES}
    },
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        "slug": slug.current,
        language
    },
`;
