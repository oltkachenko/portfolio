import SessionStorage from '@/components/SessionStorage';
import GridLayout from '@/components/common/GridLayout'
import PortableText from '@/components/portableText/PortableText';
import Category from '@/components/portfolio/Category';
import type { SanityProject } from '@/lib/sanity';
import { PROJECT_SLUG_QUERY } from '@/queries/slugPages/projects';
import { client } from '@/sanity/lib/client';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
    params: { slug: string, locale: string };
};

const getProject = async ({params: {locale, slug}}: Props) => {
    const data = await client.fetch<SanityProject>(
        PROJECT_SLUG_QUERY, 
        {
            language: locale,
            slug: slug,
        },
        {
            next: { revalidate: 60 * 60 * 24 }
        }
    )

    return data;
}

export async function generateMetadata({ params }: Props) {
    const project = await getProject({params});
    const t = await getTranslations('Metadata');

    const metadata: Metadata = {
        title: project.seo.title,
        openGraph: {
            title: project.seo.title,
            type: "website",
            locale: params.locale,
            url: `${process.env.METADATA_BASE_URL}/${params.locale}/portfolio/${params.slug}`,
            siteName: t('siteName')
        },
    }

    if (project.seo.description) {
        metadata.description = project.seo.description;
        metadata.openGraph!.description = project.seo?.description
    }

    return metadata;
}

export default async function ProjectsSlugPage({ params }: Props) {
    const t = await getTranslations('PortfolioSlugPage')
    const project = await getProject({ params })

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
            <div className='portfolio_detail_page'>
                <h1 className='portfolio_detail_page-title'>
                    {project.title}
                </h1>
                <h2 className='portfolio_detail_page-category'>
                    <Category category={project.category}/>
                </h2>
    
    
                <div className='portfolio_detail_page-list'>
                    <div className='portfolio_detail_page-list_item'>
                        <h3 className='portfolio_detail_page-list_title'>{t('role')}</h3>
                        <p className='portfolio_detail_page-list_details'>{project.role}</p>
                    </div>

                    <div className='portfolio_detail_page-list_item'>
                        <h3 className='portfolio_detail_page-list_title'>{t('categories')}</h3>
                        <p className='portfolio_detail_page-list_details'>
                            <Category category={project.category}/>
                        </p>
                    </div>

                    {project.skills && (
                        <div className='portfolio_detail_page-list_item'>
                            <h3 className='portfolio_detail_page-list_title'>{t('technology')}</h3>
                            <div className='portfolio_detail_page-list_technology'>
                                {project.skills.map(skill=> (
                                    <Image
                                        key={skill._id}
                                        className='portfolio_detail_page-list_img'
                                        src={skill.image.url}
                                        alt={skill.image.alt || skill.image.altText || skill.title || ''} 
                                        width={0}
                                        height={0}
                                        blurDataURL={skill.image.blurDataURL}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className='portfolio_detail_page-content'>
                    {project.description && (
                        <div className='portfolio_detail_page-description'>
                            <PortableText blocks={project.description} className=''/>
                        </div>
                    )}
                    <Image 
                        className='portfolio_detail_page-img'
                        src={project.images[0].image.url}
                        alt={`${project.images[0].image.alt || project.images[0].image.altText || ''}`} 
                        width={1000}
                        height={560}
                        placeholder="blur"
                        blurDataURL={project.images[0].image.blurDataURL}
                    />
                </div>

            </div>
            
            {project?._translations && (
                <SessionStorage data={project?._translations}/>

            )}
        </GridLayout>
    )
}
