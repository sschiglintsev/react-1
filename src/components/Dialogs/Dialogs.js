import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Message/Messages";

const Dialogs = (props) => {
    let dialogsElement =
        props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

    let messagesElement =
        props.messages.map(m => <Messages text={m.text}/>);

    let messageText = React.createRef();

    let onNewMessageText = () => {
        let text = messageText.current.value;
        props.newMessageText(text);
        }

    let onAddMessage = () => {
        props.newAddMessage();
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
                Новое сообщение
                <div>
                    <textarea onChange={onNewMessageText} ref={messageText} value={props.messageText}></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;