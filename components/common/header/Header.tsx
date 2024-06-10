import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <Logo />
                
                <Navigation>
                    <MenuBar/>
                </Navigation>

                <LocaleSwitcher />
            </div>
        </header>
    )
}
