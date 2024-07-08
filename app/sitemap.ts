import type { SanitySitemap } from "@/lib/sanity";
import { SITEMAP_PAGE_QUERY } from "@/queries/sitemap";
import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
    const sitemapData = await client.fetch<SanitySitemap[]>(
        SITEMAP_PAGE_QUERY
    );

    const sitemapUrls = sitemapData.map((project) => ({
        url: `https://portfolio-oltkachenkos-projects.vercel.app/${project.language}${project.slug}`,
        lastModified: new Date(project._updatedAt),
    }))
 

    return [
        {
            url: `https://portfolio-oltkachenkos-projects.vercel.app/en`,
            lastModified: new Date(),
        },
        {
            url: `https://portfolio-oltkachenkos-projects.vercel.app/ua`,
            lastModified: new Date(),
        },
        {
            url: `https://portfolio-oltkachenkos-projects.vercel.app/en/portfolio`,
            lastModified: new Date(),
        },
        {
            url: `https://portfolio-oltkachenkos-projects.vercel.app/ua/portfolio`,
            lastModified: new Date(),
        },
        ...sitemapUrls, 
    ]
}