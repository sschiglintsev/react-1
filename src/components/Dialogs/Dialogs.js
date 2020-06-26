import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Message/Messages";
import {AddMessageCreateAction, NewMessageTextCreateAction} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElement =
        props.state.dialogsPage.dialogs.map ( d => <Dialog name={d.name} id={d.id}/>)

    let messagesElement =
        props.state.dialogsPage.messages.map ( m => <Messages text={m.text}/>)

    let messageText=React.createRef();

    let newMessageText = () => {
        let text = messageText.current.value;
        props.dispatch(NewMessageTextCreateAction(text))
    }

    let addMessage = () => {
        props.dispatch(AddMessageCreateAction());
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
                    <textarea onChange={newMessageText} ref={messageText} value={props.state.dialogsPage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage} >Add</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;