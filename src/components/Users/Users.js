import React from "react";
import c from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

        if (props.users.length===0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    debugger;
                    props.setUsers(response.data.items)
                })
        }

            /*props.setUsers(  [
                    {
                        id: 1,
                        photo: 'https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-8.png',
                        followed: true,
                        name: 'Sergey',
                        status: 'Play football',
                        location: {country: 'Belarus', city: 'Minsk'}
                    },
                    {
                        id: 2,
                        photo: 'https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-8.png',
                        followed: false,
                        name: 'Masha',
                        status: 'Play hockey',
                        location: {country: 'Russia', city: 'Moscow'}
                    },
                    {
                        id: 3,
                        photo: 'https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-8.png',
                        followed: true,
                        name: 'Andrey',
                        status: 'Play voleyball',
                        location: {country: 'Ukraine', city: 'Kiev'}
                    },
                ]
            )*/



    let usersElement = props.users.map(p =>
        <div key={p.id}>
            <div>
                <div>
                    <img className={c.img} src={p.photos.small != null ? p.photos.small : "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-8.png"}/>
                </div>
                <div>
                    {p.followed
                        ? <button onClick={() => {
                            props.unfollow(p.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.follow(p.id)
                        }}>Unfollow</button>}
                </div>
            </div>
            <div>
                {p.name}
            </div>
            <p></p>
        </div>
    )
    return (
        <div>
            <h2>My friends</h2>
            <div>
                {usersElement}
            </div>
        </div>
    )
}

export default Users;