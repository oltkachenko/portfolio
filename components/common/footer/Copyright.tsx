import type { SanityFooterCopyright } from '@/lib/sanity'
import { FOOTER_COPYRIGHT } from '@/queries/fragments/footerCopyright'
import { client } from '@/sanity/lib/client'
import { getLocale } from 'next-intl/server'

export default async function Copyright() {
    const locale = await getLocale()
    const footerData = await client.fetch<SanityFooterCopyright>(FOOTER_COPYRIGHT, {
        language: locale
    })

    const setDateRange = () => {
        if  (new Date().getFullYear() > new Date(footerData.releaseDate).getFullYear()) {
            return `${new Date(footerData.releaseDate).getFullYear()} - ${new Date().getFullYear()}`
        }

        return new Date(footerData.releaseDate).getFullYear();
    }

    return (
        <p>
            © {footerData.copyright} {setDateRange()}
        </p>
    )
}
