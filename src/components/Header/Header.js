import React from "react";
import c from './Header.module.css';

const Header = () => {
    return (
    <header className={c.header}>
        <img className={c.img}  src='http://www.chigross.ru/img/logo_black_.png'/>
    </header>
    );
}

export default Header;