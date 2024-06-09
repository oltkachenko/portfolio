import ContactForm from "@/components/ContactForm";
import About from "@/components/modules/About";
import Services from "@/components/modules/Services";
import getTranslation from "@/helpers/getTranslation";
import type { SanityHomePage } from "@/lib/sanity";
import { HOME_PAGE_QUERY } from "@/queries/home";
import { client } from "@/sanity/lib/client";
import { getLocale } from "next-intl/server";

export default async function Home() {
    const translations = await getTranslation("ContactForm", [
        'labelName',
        'labelEmail',
        'labelSubject',
        'labelMessage',
        'buttonName',
        "formErrors.name",
        "formErrors.email",
        "formErrors.subject",
        "formErrors.message",
    ])
    
    const locale = await getLocale();
    const page = await client.fetch<SanityHomePage>(
        HOME_PAGE_QUERY, 
        {
            "language": locale
        }
    )
    
    return (
        <main className="">
            {page.modules.map(moduleData => {
                if(moduleData._type === 'module.services') {
                    return <Services key={moduleData._key} {...moduleData} />
                }
                
                if(moduleData._type === 'module.about') {
                    return <About key={moduleData._key} {...moduleData}/>
                }

                if(moduleData._type === 'module.contact') {                    
                    return <ContactForm key={moduleData._key} contact={moduleData} formTranslation={translations}/>
                }
            })}
        </main>
    );
}
