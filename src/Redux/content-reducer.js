const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialState =  {
    newTextPost: 'New Post',
    post: [
        {id: 0, message: 'Hi! How are you? bay!', likesCount: 1},
        {id: 1, message: 'Alena very good!!!', likesCount: 2}
    ]
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_POST:
            let postElement = {
                id: 2,
                message: state.newTextPost,
                likesCount: 5
            }
            state.post.push(postElement);
            state.newTextPost = '';
            return state;
       case NEW_POST_TEXT:
                state.newTextPost = action.postText;
                return state;
        default:
            return state;
    }
}
export const AddPostCreateAction = () => {
    return {type: ADD_POST}
}
export const NewPostTextCreateAction = (text) => {
    return {type:NEW_POST_TEXT, postText :text}
}

export  default contentReducer;
