import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Masha'}
            ]
        },
        contentPage: {
            newTextPost: 'New Post',
            post: [
                {id: 0, message: 'Hi! How are you? bay!', likesCount: 1},
                {id: 1, message: 'Alena very good!!!', likesCount: 2}
            ]
        },
    },
    getState() {
        return this._state;
    },
    renderTree() {
        console.log('hi');
    },
    subscribe(observer) {
        this.renderTree = observer;
    },

    dispatch(action) {
        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.renderTree(this._state);

    }
}
    export default store;


