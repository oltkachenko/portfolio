import groq from "groq";

export const LINK_PAGE = groq`
    _key,
    _type,
    title,
    buttonStyle,
    "slug": select(
        pageType == 'portfolio' => '/portfolio',
        pageType == 'services' => '/services'
    ),
`;
