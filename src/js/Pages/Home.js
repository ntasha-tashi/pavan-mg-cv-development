import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Section from "../Components/Section/Section";
import Social from "../Components/Header/Social/Social";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import sass from "../../assets/sass.svg";
import git from "../../assets/git.svg";
import code from "../../assets/code.svg";
import gith from "../../assets/gith.svg";
import Projects from "../Components/Projects/Projects";
import Logo from "../Components/Header/Logo/Logo";
import Menu from "../Components/Header/Menu/Menu";
import gh from "../../assets/github.svg";
import tw from "../../assets/twitter.svg";
import ln from "../../assets/linkedin.svg";

const Home = () => {
    return (
        <>
            <Header type="header">
                <Logo type="header__logo" />
                <div className="header__nav">
                    <Menu type="header__nav"
                          items={
                              [
                                  { title: "Home", url: "#" },
                                  { title: "About", url: "#about" },
                                  { title: "Tech stack", url: "#stack" },
                                  { title: "Projects", url: "#projects" },
                                  { title: "Contact", url: "#contact" },
                              ]
                          }/>
                    <Social type="header__nav" items={[
                        { url: "#", src: gh, alt: "Github" },
                        { url: "#", src: tw, alt: "Twitter" },
                        { url: "#", src: ln, alt: "LinkedIn" },

                    ]}/>
                </div>
            </Header>
            <Banner/>
            <Section type="tech" title="My Tech Stack" subtitle="Technologies I've been working with recently">
                <Social type={"tech"} items={[
                    { url: "#", src: html, alt: "HTML" },
                    { url: "#", src: css, alt: "CSS" },
                    { url: "#", src: js, alt: "JS" },
                    { url: "#", src: react, alt: "React" },
                    { url: "#", src: sass, alt: "Saas" },
                    { url: "#", src: git, alt: "Git" },
                    { url: "#", src: code, alt: "VS Code" },
                    { url: "#", src: gith, alt: "GitHub" },

                ]}/>
            </Section>
            <Section type="projects" title="Projects" subtitle="Things I've built so far">
                <Projects/>
            </Section>
            <Header type="footer">
                <Logo type="header__logo" />
                <div className="header__nav">
                    <Menu type="header__nav"
                          items={
                              [
                                  { title: "+91 12345 09876", url: "tel:+91 12345 09876" },
                                  { title: "info@example.com", url: "mailto:info@example.com" },
                              ]
                          }/>
                    <Social type="header__nav" items={[
                        { url: "#", src: gh, alt: "Github" },
                        { url: "#", src: tw, alt: "Twitter" },
                        { url: "#", src: ln, alt: "LinkedIn" },
                    ]}/>
                </div>
            </Header>
            <hr className="footer__divider"/>
            <Header type="footer">
                <Menu type="header__nav"
                      items={
                          [
                              { title: "Home", url: "#" },
                              { title: "About", url: "#about" },
                              { title: "Tech stack", url: "#stack" },
                              { title: "Projects", url: "#projects" },
                              { title: "Contact", url: "#contact" },
                          ]
                      }/>
                <div className="footer__copyright">
                    <p>Designed and built by <span className="gradient"> Pavan MG</span> with <span className="gradient">Love</span> & <span className="gradient">Coffee</span></p>
                </div>
            </Header>
        </>
    )
}

export default Home;