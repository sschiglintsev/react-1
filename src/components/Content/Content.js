import React from "react";
import c from './Content.module.css'
import MyPost from "./Myposts/Myposts";



const Content = (props) => {
    return (
    <div className={c.content}>
        <div>
            <img className={c.img} src='https://primpress.ru/img/articles/0210200446211dp.jpg' />
        </div>

        <MyPost post={props.post.post} addPost={props.addPost} newPostText={props.newPostText} newTextPost={props.newTextPost.text}/>
    </div>
    );
}

export default Content;
