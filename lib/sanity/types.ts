import type { PortableTextBlock } from "@portabletext/types";
import type { Image } from "@sanity/types";

export interface SanityAssetImage extends Image {
    _type: "image";
    alt?: string;
    altText?: string;
    blurDataURL: string;
    height: number;
    url: string;
    width: number;
}

export type SanityHomePage = {
    title: string;
    modules: (SanityModule)[];
    seo: SanitySeo;
};

export type SanityPortfolioPage = SanityProject[]

export type SanityPage = {
    _id: string;
    _type: string;
    slug: string;
    title: string;
    pageType: 'page-type' | undefined;
    body: PortableTextBlock[];
    modules: (SanityModule)[];
    seo: SanitySeo;
    _translations: {
        slug: string;
        language: string
    }
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
    };
    socialShow: boolean;
    social: SanitySocial[];
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

export type SanityLink = SanityLinkPage | SanityLinkExternal | SanityLinkInternal;

export type SanityLinkPage = {
    _key: string;
    _type: "linkPage";
    title: string;
    pageType: string;
    buttonStyle?: 'link-style' | 'button-style';
    slug: string;
    seo: SanitySeo;
};

export type SanityLinkExternal = {
    _key: string;
    _type: "linkExternal";
    newWindow?: boolean;
    url: string;
    title: string;
    buttonStyle?: 'link-style' | 'button-style';
};
  
export type SanityLinkInternal = {
    _key: string;
    _type: "linkInternal";
    slug?: string;
    title: string;
    buttonStyle?: 'link-style' | 'button-style';
};

export type SanityService = {
    _id: string;
    _type: 'services';
    title: string;
    slug: string;
    showDetailsLink: boolean;
    detailsLink: SanityLink[];
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
    category: string;
    role: string;
    shortDescription: string;
    description: PortableTextBlock[];
    skills: SanityTechnologyTag[];
    tileImage: SanityAssetImage;
    images: {
        image: SanityAssetImage
    }[];
    seo: SanitySeo;
    _translations: {
        slug: string;
        language: string
    }
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
    menuLinks: SanityLink[]
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

export type SanityTechnologyTag = {
    _id: string;
    _type: string;
    title: string;
    image: SanityAssetImage;
};

export type SanitySocial = {
    _id: string;
    _type: string;
    title: string;
    link: string;
    image: SanityAssetImage;
};