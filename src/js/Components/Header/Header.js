import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./_header.scss";
import Social from "./Social/Social";
const Header = (props) => {
    return (
        <div className={props.type}>
            <Logo type={props.type + "__logo"} />
            <div className={props.type + "__nav"}>
                <Menu type={props.type +"__nav"}
                    items={
                    [
                        { title: "Home", url: "#" },
                        { title: "About", url: "#about" },
                        { title: "Tech stack", url: "#stack" },
                        { title: "Projects", url: "#projects" },
                        { title: "Contact", url: "#contact" },
                    ]
                }/>
                <Social type={props.type +"__nav"} />
            </div>
        </div>
    )
}
export default Header;