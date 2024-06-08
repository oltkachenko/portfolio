import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <Logo />
                
                <Navigation  />

                <LocaleSwitcher />
            </div>
        </header>
    )
}
