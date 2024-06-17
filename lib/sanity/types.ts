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
    | SanityModulePortfolio

export type SanityModuleCallout = {
    _key?: string;
    _type: "module.callout";
    links: SanityLink[];
    title: string;
    subtitle: string;
    alignment: string;
};

export type SanityModuleServices = {
    _key?: string;
    _type: "module.services";
    links: SanityLink[];
    title?: string;
    subtitle?: string;
    headingAlignment: string | null;
    servicesList: SanityService[];
    backgroundColor: SanityColorInput;
};

export type SanityModuleAbout = {
    _key?: string;
    _type: "module.about";
    title: string;
    linkName: string;
    image: SanityAssetImage;
    body: PortableTextBlock[];
    contactInfo: SanityContactInfo[];
    file: {
        description: string;
        fileUrl: string;
    }
}

export type SanityModuleContact = {
    _key?: string;
    _type: "module.contact";
    title?: string;
    subtitle?: string;
    headingAlignment: string | null;
    body: PortableTextBlock[];
    contactInfo: SanityContactInfo[];
    backgroundColor: SanityColorInput;
}

export type SanityModulePortfolio = {
    _key?: string;
    _type: "module.portfolio";
    title?: string;
    subtitle?: string
    headingAlignment: string | null;
    projectsList: SanityProject[];
    backgroundColor: SanityColorInput;
    links: SanityLink[];
}

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export type SanityLinkExternal = {
    _key: string;
    _type: "linkExternal";
    newWindow?: boolean;
    url: string;
    title: string;
    buttonStyle?: 'link-style' | 'button-style'
};
  
export type SanityLinkInternal = {
    _key: string;
    _type: "linkInternal";
    slug?: string;
    title: string;
    buttonStyle?: 'link-style' | 'button-style'
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

export type SanityProject = {
    _id: string;
    _type: 'project';
    title: string;
    slug: string;
    role: string;
    description: PortableTextBlock[];
    skills: string
    images: {
        image: SanityAssetImage
    }[]
};

export type SanitySeo = {
    description?: string;
    image?: SanityAssetImage;
    title: string;
};

export type SanityFooterCopyright = {
    copyright: string,
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
    type: 'tel' | 'email' | 'text' | null;
}

export type SanityColorInput = {
    label: string,
    value: string,
};