import { client } from "@/sanity/lib/client"

interface Types {
    copyright: {value: string},
    releaseDate: string
}

const getPage = async () => {
    const query = `*[_type == "page" && _id == '04e98763-0633-42f1-a77a-14bc96c935b0']`

    const data = await client.fetch<Types>(query)

    return data
}

export default async function page() {
    const data = await getPage()

    console.log(data);
    

    return (
        <div>page</div>
    )
}
