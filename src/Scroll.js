import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", height: '24em'}}>
            {props.children}
        </div>
    )
};

export default Scroll;