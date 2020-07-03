import React from "react";
import {AddPostCreateAction, NewPostTextCreateAction} from "../../../Redux/content-reducer";
import MyPost from "./Myposts";
import StoreContext from "../../../StoreContext"

const MyPostContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let addPost = () => {
                store.dispatch(AddPostCreateAction());
            }
            let newPostText = (text) => {
                store.dispatch(NewPostTextCreateAction(text));
            }
            return <MyPost addPost={addPost}
                           newPostText={newPostText}
                           post={store.getState().contentPage.post}
                           newTextPost={store.getState().contentPage.newTextPost}/>
        }
        }
    </StoreContext.Consumer>
}

export default MyPostContainer;