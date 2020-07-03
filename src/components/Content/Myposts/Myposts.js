import React from "react";
import c from './Myposts.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    let postElement = props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPost = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onNewPostText = () => {
        let text = newPost.current.value;
        props.newPostText(text);
    }
    return (
        <div>
            <div className={c.h}>
                New post
                <div>
                    <textarea onChange={onNewPostText} ref={newPost} value={props.newTextPost}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add</button>
                </div>
            </div>
            <div>
                {postElement}
            </div>

        </div>
    );

}

export default MyPost;