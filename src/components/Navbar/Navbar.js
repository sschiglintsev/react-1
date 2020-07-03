import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    let friendsElement = props.friends.map(p => <Friends friend={p.name} />)

    return (
        <div className={c.navbarwrapper}>
            <nav className={c.navbar}>
                <div className={c.item}>
                    <NavLink to='/content' activeClassName={c.activLink}>Профиль</NavLink>
                </div>
                <div className={`${c.item} ${c.mes}`}>
                    <NavLink to='/dialogs' activeClassName={c.activLink}>Сообщения</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/news' activeClassName={c.activLink}>Новости</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/music' activeClassName={c.activLink}>Музыка</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/settings' activeClassName={c.activLink}>Настройки</NavLink>
                </div>
            </nav>
            <div className={c.listfriends}>
                <h2>Друзья</h2>
                {friendsElement}
            </div>
        </div>

    );
}

export default Navbar;