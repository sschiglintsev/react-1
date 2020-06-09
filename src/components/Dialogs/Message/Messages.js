import React from "react";
import c from './../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={c.message}>
            {props.text}
        </div>
    )
}

export default Messages;