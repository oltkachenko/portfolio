import { client } from "@/sanity/lib/client"

interface Types {
    copyright: {value: string},
    releaseDate: string
}

export default async function page() {
    return (
        <div>page</div>
    )
}
