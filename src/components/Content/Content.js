import React from "react";
import c from './Content.module.css'
import MyPostContainer from "./Myposts/MypostsContainer";

const Content = (props) => {
    return (
    <div className={c.content}>
        <div>
            <img className={c.img} src='https://primpress.ru/img/articles/0210200446211dp.jpg' />
        </div>
        <MyPostContainer store={props.store}/>
    </div>
    );
}

export default Content;
