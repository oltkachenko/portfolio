import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";

export default async function CoreLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />

            {children}
            
            <Footer />
        </>
    )
}