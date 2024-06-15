import GridLayout from '@/components/common/GridLayout'
import type { SanityProject } from '@/lib/sanity';
import { PROJECT_SLUG_QUERY } from '@/queries/slugPages/projects';
import { client } from '@/sanity/lib/client';

type Props = {
    params: { slug: string, locale: string };
};

export default async function ProjectsSlugPage({ params }: Props) {
    // const [page, setPage] = useState(null)
    // const params = useParams()

    // useEffect(() => {
    //     client.fetch<SanityProject>(
    //         PROJECT_SLUG_QUERY, 
    //         {
    //             slug: params.slug,
    //             language: params.locale
    //         }
    //     ).then((res) => console.log(res))
    // }, [params.slug, params.locale])

    const page = await client.fetch<SanityProject>(
        PROJECT_SLUG_QUERY, 
        {
            language: params.locale,
            slug: params.slug
        }
    )

    // const [page] = await Promise.all([
    //     client.fetch<SanityProject>(
    //         PROJECT_SLUG_QUERY,
    //         {
    //             language: params.locale,
    //             slug: params.slug
    //         },
    //     )
    // ]);

    console.log(page);
    

    return (
        <GridLayout>
            {page && (page.title)}
        </GridLayout>
    )
}
