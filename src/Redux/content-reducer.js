const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

const contentReducer = (state, action) => {
    switch (action.type) {
       case ADD_POST:
            let postElement = {
                id: 2,
                message: state.newTextPost,
                likesCount: 5
            }
            state.post.push(postElement);
            state.newTextPost = '';
            debugger;
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
