import React from "react";
import c from './Content.module.css'
import Post from "./Myposts/Myposts";

const Content = () => {
    return (
    <div className={c.content}>
        <div>
            <img className={c.img} src='https://primpress.ru/img/articles/0210200446211dp.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <Post />
    </div>
    );
}

export default Content;