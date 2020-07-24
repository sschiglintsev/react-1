import React from "react";
import {AddMessageCreateAction, NewMessageTextCreateAction} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageText: (text) => {
            dispatch(NewMessageTextCreateAction(text))
        },
        newAddMessage: () => {
            dispatch(AddMessageCreateAction())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;