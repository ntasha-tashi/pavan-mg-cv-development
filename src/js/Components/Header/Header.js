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
            {props.children}
        </div>
    )
}
export default Header;