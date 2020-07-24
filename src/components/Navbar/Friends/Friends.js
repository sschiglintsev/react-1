import React from "react";
import c from './Friends.module.css'

const Friends = (props) => {
    return (
        <div key={props.id}>
            <img className={c.img} src='https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-8.png' />
            {props.name}
        </div>
    );
}

export default Friends;