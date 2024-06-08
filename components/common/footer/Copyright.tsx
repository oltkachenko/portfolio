import type { SanityFooterCopyright } from '@/lib/sanity'
import { FOOTER_COPYRIGHT } from '@/queries/fragments/footerCopyright'
import { client } from '@/sanity/lib/client'
import { getLocale } from 'next-intl/server'

export default async function Copyright() {
    const locale = await getLocale()
    const data = await client.fetch<SanityFooterCopyright>(FOOTER_COPYRIGHT, {
        language: locale
    })
    
    const copyright = data.copyright?.value;
    
    const setDateRange = () => {
        if  (new Date().getFullYear() > new Date(data.releaseDate).getFullYear()) {
            return `${new Date(data.releaseDate).getFullYear()} - ${new Date().getFullYear()}`
        }

        return new Date(data.releaseDate).getFullYear();
    }

    return (
        <p>
            © {copyright} {setDateRange()}
        </p>
    )
}
