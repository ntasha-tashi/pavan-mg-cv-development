import React from "react";
import "./_wrapper.scss";

const Wrapper = (props) => {
    return (
        <div className={props.type}>
            {props.children}
        </div>
    )
}
export default Wrapper;