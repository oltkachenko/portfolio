import type { PortableTextBlock } from "@portabletext/types";
import type { Image } from "@sanity/types";

export interface SanityAssetImage extends Image {
    _type: "image";
    altText?: string;
    blurDataURL: string;
    height: number;
    url: string;
    width: number;
}

export type SanityHomePage = {
    modules: (SanityModule)[];
    seo: SanitySeo;
};

export type SanityPage = {
    _id: string,
    _type: string
    slug: string
    title: string
};

export type SanityModule =
    | SanityModuleCallout
    | SanityModuleServices
    | SanityModuleAbout
    | SanityModuleContact

export type SanityModuleCallout = {
    _key?: string;
    _type: "module.callout";
    link: SanityLink;
    text: string;
};

export type SanityModuleServices = {
    _key?: string;
    _type: "module.services";
    links: SanityLink;
    title: string;
    subtitle: string;
    servicesList: (SanityService)[]
};

export type SanityModuleAbout = {
    _key?: string;
    _type: "module.about";
    title: string;
    image: SanityAssetImage;
    body: PortableTextBlock[]
    contactInfo: SanityContactInfo[]
}

export type SanityModuleContact = {
    _key?: string;
    _type: "module.contact";
    title: string;
    body: string;
    contactInfo: SanityContactInfo[]
}

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export type SanityLinkExternal = {
    _key: string;
    _type: "linkExternal";
    newWindow?: boolean;
    url: string;
    title: string;
    buttonStyle?: string
};
  
export type SanityLinkInternal = {
    _key: string;
    _type: "linkInternal";
    documentType: string;
    slug?: string;
    title: string;
    buttonStyle?: string
};

export type SanityService = {
    _id: string;
    _type: 'services';
    title: string;
    description: {
        value: string
    },
    image: SanityAssetImage
};

export type SanitySeo = {
    description?: string;
    image?: SanityAssetImage;
    title: string;
};

export type SanityFooterCopyright = {
    copyright: {
        value: string
    },
    releaseDate: string
};

export type SanityNavigation = {
    _id: string;
    _type: string;
    menuLinks: (SanityLink | SanityNavigationPageLink)[]
};

export type SanityNavigationPageLink = {
    _key: string;
    _type: string;
    title?: string;
    collectionPages: SanityPage
};

export type SanityContactInfo = {
    _id: string;
    _type: string;
    title: string;
    value: string;
}