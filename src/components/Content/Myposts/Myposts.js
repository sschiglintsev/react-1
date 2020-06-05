import React from "react";
import c from './Myposts.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <Post message='Hi! How are you? bay!' likesCount='20'/>
            <Post message='Alena very good!!!' likesCount='1'/>
        </div>
    );
}

export default MyPost;