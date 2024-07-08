import type { SanityFooter } from "@/lib/sanity";

interface Props {
    copyright: SanityFooter["copyright"]
}

export default async function Copyright({copyright}: Props) {
    const setDateRange = () => {
        if  (new Date().getFullYear() > new Date(copyright.releaseDate).getFullYear()) {
            return `${new Date(copyright.releaseDate).getFullYear()} - ${new Date().getFullYear()}`
        }

        return new Date(copyright.releaseDate).getFullYear();
    }

    return (
        <p>
            © {copyright.text} {setDateRange()}
        </p>
    )
}
