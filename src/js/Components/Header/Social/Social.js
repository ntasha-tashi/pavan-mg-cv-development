import React from "react";

import gh from "../../../../assets/github.svg";
import tw from "../../../../assets/twitter.svg";
import ln from "../../../../assets/linkedin.svg";
import "./_social.scss";

const Social = (props) => {
    return (
        <div className={props.type + "__social"}>
            <a href="#"><img src={gh} alt="Github"/></a>
            <a href="#"><img src={tw} alt="Twitter"/></a>
            <a href="#"><img src={ln} alt="Linkedin"/></a>
        </div>
    )
}
export default Social;