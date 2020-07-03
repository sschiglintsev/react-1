const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {text: 'HI'},
        {text: 'Yo'},
        {text: 'Bay'}
    ],
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Masha'}
    ],
    newMessageText: 'Message',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        case ADD_MESSAGE:
            let messageElement = {
                text: state.newMessageText
            }
            state.messages.push(messageElement);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}
export const NewMessageTextCreateAction = (text) => {
    return {type:NEW_MESSAGE_TEXT, messageText :text}
}
export const AddMessageCreateAction = () => {
    return {type: ADD_MESSAGE}
}
export default dialogsReducer;