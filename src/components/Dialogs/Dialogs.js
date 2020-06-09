import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Message/Messages";

const Dialogs = (props) => {

    let dialogsElement =
        props.dialogs.dialogs.map ( d => <Dialog name={d.name} id={d.id}/>)

    let messagesElement =
        props.dialogs.messages.map ( m => <Messages text={m.text}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;