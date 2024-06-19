import SessionStorage from '@/components/SessionStorage';
import GridLayout from '@/components/common/GridLayout'
import type { SanityProject } from '@/lib/sanity';
import { PROJECT_SLUG_QUERY } from '@/queries/slugPages/projects';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

type Props = {
    params: { slug: string, locale: string };
};

export default async function ProjectsSlugPage({ params }: Props) {
    console.log(params);
    

    // const [page, setPage] = useState(null)
    // const params = useParams()

    // useEffect(() => {
    //     client.fetch<SanityProject>(
    //         PROJECT_SLUG_QUERY, 
    //         {
    //             slug: params.slug,
    //             language: params.locale
    //         }
    //     ).then((res) => setPage(res))
    // }, [params.slug, params.locale])

    const project = await client.fetch<SanityProject>(
        PROJECT_SLUG_QUERY, 
        {
            language: params.locale,
            slug: params.slug,
        },
        {
            cache: 'force-cache'
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

    
    if (!project) {
        return notFound()
    }
    
    return (
        <GridLayout>
            portfolio slug, 
            
            {project?._translations && (
                <SessionStorage data={project?._translations}/>

            )}
        </GridLayout>
    )
}
