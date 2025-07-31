import React from "react";
import "./_menu.scss";

const Menu = (props) => {
    return (
        <nav className="menu">
            <ul>
                {props.items.map((item, i) => (
                    <li key={i}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Menu;