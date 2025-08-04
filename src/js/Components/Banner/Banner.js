import React from "react";

import "./_banner.scss";
import profile from "../../../assets/profile.png";
const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__title">
                <h1>Hi 👋,<br/>
                My name is<br/>
                    <span className="gradient">Pavan MG</span><br/>
                I build things for web</h1>
            </div>
            <div className="banner__image">
                <img src={profile} alt="Profile"/>
            </div>
        </section>
    )
}
export default Banner;