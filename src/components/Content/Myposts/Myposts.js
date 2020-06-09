import React from "react";
import c from './Myposts.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    let postElement = props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div >
            <div className={c.h}>
                My post
            </div>
            <div>
                New post
            </div>
            <div>
                {postElement}
            </div>

        </div>
    );
}

export default MyPost;