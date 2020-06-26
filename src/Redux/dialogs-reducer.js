const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case ADD_MESSAGE:
            let messageElement = {
                text: state.newMessageText
            }
            state.messages.push(messageElement);
            return state;
        default:
            return state;
    }
}
export const NewMessageTextCreateAction = (text) => {
    return {type:NEW_MESSAGE_TEXT, postText :text}
}
export const AddMessageCreateAction = () => {
    return {type: ADD_MESSAGE}
}
export default dialogsReducer;