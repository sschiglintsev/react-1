const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialState = {
    newTextPost: 'New Post',
    post: [
        {id: 0, message: 'Hi! How are you? bay!', likesCount: 1},
        {id: 1, message: 'Alena very good!!!', likesCount: 2}
    ]
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let message = state.newTextPost;
            return {
                ...state,
                post: [...state.post, {id: 2, message: message, likesCount: 5}],
                newTextPost: ''
            };
        }
        case NEW_POST_TEXT: {
            return {
                ...state,
                newTextPost: action.postText
            };
        }
        default:
            return state;
    }
}
export const AddPostCreateAction = () => {
    return {type: ADD_POST}
}
export const NewPostTextCreateAction = (text) => {
    return {type: NEW_POST_TEXT, postText: text}
}

export default contentReducer;
