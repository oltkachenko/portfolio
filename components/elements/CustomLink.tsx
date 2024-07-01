import type { SanityLink } from '@/lib/sanity';
import { Link } from '@/navigation';
import React, { type HTMLAttributes } from 'react'

type Props = {
    link: SanityLink;
} & HTMLAttributes<HTMLElement>;

export default async function CustomLink({ children, link, ...rest }: Props) {
    if (link._type === "linkPage") {
        return (
            <Link 
                className={`${link.buttonStyle === 'button-style' ? 'button' : 'link'}`}
                href={link.slug}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    if (link._type === "linkExternal") {
        return (
            <Link 
                className={`${link.buttonStyle === 'button-style' ? 'button' : 'link'}`}
                href={link.url}
                rel="noreferrer"
                target={link.newWindow ? "_blank" : "_self"}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    if (link._type === "linkInternal" && link.slug) {
        return (
            <Link 
                key={link._key}
                className={`${link.buttonStyle === 'button-style' ? 'button' : 'link'}`} 
                href={link.slug}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    return null
}
