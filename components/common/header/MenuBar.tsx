import { client } from "@/sanity/lib/client"
import { getLocale } from "next-intl/server"
import { NAVIGATION } from "@/queries/fragments/navigation"
import type { SanityNavigation } from "@/lib/sanity"
import {Link} from "@/navigation"

export default async function MenuBar() {
    const locale = await getLocale()
    
    const navigation = await client.fetch<SanityNavigation>(NAVIGATION, {
        language: locale
    })
    
    const renderLinks = navigation.menuLinks.map((link: any) => {
        if (link._type === "linkPage") {
            return (
                <li className="menu_bar-item" key={link._key}>
                    <Link 
                        className="menu_bar-link" 
                        href={link.slug}
                    >
                        {link.title}
                    </Link>
                </li>
            );
        }

        if (link._type === "linkExternal") {
            return (
                <li className="menu_bar-item" key={link._key}>
                    <Link 
                        className="menu_bar-link" 
                        href={link.url}
                        rel="noreferrer"
                        target={link.newWindow ? "_blank" : "_self"}
                    >
                        {link.title}
                    </Link>
                </li>
            );
        }

        if (link._type === "linkInternal" && link.slug) {   
            return (
                <li className="menu_bar-item" key={link._key}>
                    <Link 
                        className="menu_bar-link" 
                        href={link.slug}
                    >
                        {link.title}
                    </Link>
                </li>
            );
        }

        return null
    });
        
    return (
        <nav className="menu_bar">
            <ul className="menu_bar-list">
                {renderLinks}
            </ul>
        </nav>
    )
}
