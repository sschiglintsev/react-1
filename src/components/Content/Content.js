import React from "react";
import c from './Content.module.css'
import MyPost from "./Myposts/Myposts";



const Content = (props) => {
    return (
    <div className={c.content}>
        <div>
            <img className={c.img} src='https://primpress.ru/img/articles/0210200446211dp.jpg' />
        </div>

        <MyPost state={props.state} dispatch={props.dispatch}/>
    </div>
    );
}

export default Content;
