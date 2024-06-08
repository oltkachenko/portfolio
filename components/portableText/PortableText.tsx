import type { PortableTextComponents } from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { useMemo } from "react";

import LinkEmailAnnotation from "@/components/portableText/annotations/LinkEmail";
import LinkExternalAnnotation from "@/components/portableText/annotations/LinkExternal";
import LinkInternalAnnotation from "@/components/portableText/annotations/LinkInternal";
import Block from "@/components/portableText/blocks/Block";


type Props = {
  blocks: PortableTextBlock[];
  className?: string;
  centered?: boolean;
};

export default function PortableText({ blocks, centered, className }: Props) {
    const components: PortableTextComponents = {
        list: {
        bullet: ({ children }) => (
            <ul className=''>{children}</ul>
        ),
        number: ({ children }) => (
            <ol className=''>{children}</ol>
        ),
        },
        marks: {
        annotationLinkExternal: LinkExternalAnnotation,
        annotationLinkInternal: LinkInternalAnnotation,
        annotationLinkEmail: LinkEmailAnnotation,
        },
        block: Block,
        // types: {
        //   "module.accordion": AccordionBlock,
        //   "module.callout": (props: any) => (
        //     <CalloutBlock centered={centered} {...props} />
        //   ),
        //   "module.grid": GridBlock,
        //   "module.images": (props: any) => (
        //     <ImagesBlock centered={centered} {...props} />
        //   ),
        //   "module.instagram": InstagramBlock,
        //   "module.products": ProductsBlock,
        //   "module.taggedProducts": TaggedProductsBlock,
        // },
    };

    const portableText = useMemo(() => {
        return (
            <div className={`portable_text ${className}`}>
                <PortableTextReact value={blocks} components={components} />
            </div>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blocks]);

    return portableText;
}
