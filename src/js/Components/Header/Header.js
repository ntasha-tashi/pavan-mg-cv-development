import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./_header.scss";
import Social from "./Social/Social";
import gh from "../../../assets/github.svg";
import tw from "../../../assets/twitter.svg";
import ln from "../../../assets/linkedin.svg";
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
                <Social type={props.type +"__nav"} items={[
                    { url: "#", src: gh, alt: "Github" },
                    { url: "#", src: tw, alt: "Twitter" },
                    { url: "#", src: ln, alt: "LinkedIn" },

                ]}/>
            </div>
        </div>
    )
}
export default Header;