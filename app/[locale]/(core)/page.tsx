import Modules from "@/components/modules/Modules";
import type { SanityHomePage } from "@/lib/sanity";
import { HOME_PAGE_QUERY } from "@/queries/home";
import { client } from "@/sanity/lib/client";

type Props = {
    params: { locale: string };
};

export default async function Home({ params }: Props) {
    const page = await client.fetch<SanityHomePage>(
        HOME_PAGE_QUERY, 
        {
            "language": params.locale
        }
    )

    return (
        <main className="">
            {page.modules.map(moduleData => 
                <Modules key={moduleData._key} moduleData={moduleData} />
            )}
        </main>
    );
}
