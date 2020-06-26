import React from "react";
import c from './Myposts.module.css'
import Post from "./Post/Post";
import {AddPostCreateAction, NewPostTextCreateAction} from "../../../Redux/content-reducer";

const MyPost = (props) => {
    let postElement = props.state.contentPage.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPost=React.createRef();
    let addPost =() => {
        props.dispatch(AddPostCreateAction());
    }
    let newPostText =() => {
        let text = newPost.current.value;
        props.dispatch(NewPostTextCreateAction(text))
    }
    return (
        <div >
            <div className={c.h}>
                New post
                <div>
                <textarea onChange={newPostText} ref={newPost} value={props.state.contentPage.newTextPost}></textarea>
            </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div>
                {postElement}
            </div>

        </div>
    );

}

export default MyPost;