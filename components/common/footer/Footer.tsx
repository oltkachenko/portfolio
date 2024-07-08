import { getLocale } from "next-intl/server";
import Social from "../Social";
import Copyright from "./Copyright";
import { client } from "@/sanity/lib/client";
import type { SanityFooter } from "@/lib/sanity";
import { FOOTER } from "@/queries/fragments/footer";

export default async function Footer() {
    const locale = await getLocale()
    const footerData = await client.fetch<SanityFooter>(
        FOOTER, 
        {
            language: locale
        }
    )

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <div className="footer-logo">
                        {footerData.logoText && footerData.logoText}
                    </div>

                    {footerData.socialShow && (
                        <Social social={footerData.social} />
                    )}
                </div>

                <div className="footer-copyright">
                    <Copyright copyright={footerData.copyright} />
                </div>
            </div>
        </footer>
    )
}
