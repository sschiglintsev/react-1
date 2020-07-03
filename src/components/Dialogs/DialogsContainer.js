import React from "react";
import {AddMessageCreateAction, NewMessageTextCreateAction} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext"

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let newMessageText = (text) => {
                let action = NewMessageTextCreateAction(text);
                store.dispatch(action);
            }

            let newAddMessage = () => {
                let action = store.dispatch(AddMessageCreateAction());
                store.dispatch(AddMessageCreateAction(action));
            }
            return <Dialogs newMessageText={newMessageText} newAddMessage={newAddMessage}
                            dialogs={store.getState().dialogsPage.dialogs}
                            messages={store.getState().dialogsPage.messages}
                            messageText={store.getState().dialogsPage.newMessageText}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;