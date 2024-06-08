import Copyright from "./Copyright";

export default async function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-copyright">
                    <Copyright />
                </div>
            </div>
        </footer>
    )
}
