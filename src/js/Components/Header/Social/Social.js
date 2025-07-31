import React from "react";

import "./_social.scss";

const Social = (props) => {
    return (
        <div className={props.type + "__social"}>
            {props.items.map((item, i) => (
                <a key={i} href={item.url}><img src={item.src} alt={item.alt}/></a>
            ))}
        </div>
    )
}
export default Social;