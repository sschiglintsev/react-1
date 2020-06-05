import React from "react";
import c from './Post.module.css'

const Post = (props) => {
    return (
            <div>
                <img className={c.img} src='https://vokrug.tv/pic/person/e/9/a/b/e9abb1b8929cede9f7058672f4b12556.jpeg' />
                {props.message}
                <div>
                    <span>Like {props.likesCount}</span>
                </div>
            </div>
    );
}

export default Post;