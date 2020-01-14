import React from "react";
import '../containers/App.css';

const Scroll = (props) => {
    return (
        <div className={'scrolling'} style={{overflowY: "scroll", height: '70vh', scrollbarColor: '#180909 black'}}>
            {props.children}
        </div>
    )
};

export default Scroll;