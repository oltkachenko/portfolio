import Modules from "@/components/modules/Modules";
import type { SanityHomePage } from "@/lib/sanity";
import { HOME_PAGE_QUERY } from "@/queries/home";
import { client } from "@/sanity/lib/client";

type Props = {
    params: { locale: string };
};

export default async function Home({ params }: Props) {
    const homePage = await client.fetch<SanityHomePage>(
        HOME_PAGE_QUERY, 
        {
            "language": params.locale
        },
        {
            next: { revalidate: 60 * 60 * 24 }
        }
    )

    return (
        <main className="">
            {homePage.modules && homePage.modules.map(moduleData => 
                <Modules key={moduleData._key} moduleData={moduleData} />
            )}
        </main>
    );
}
