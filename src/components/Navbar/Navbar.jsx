import React from 'react';
import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.navbar}>
        <div className={s.nav_links}>
            <NavLink to="/profile" className={s.nav_link}>profile</NavLink>
        </div>
        <div className={s.nav_links}>
            <NavLink to="/Users" className={s.nav_link}>Users</NavLink>
        </div>
        <div className={s.nav_links}>
            <NavLink to="/dialogs" className={s.nav_link}>messages</NavLink>
        </div>
        <div className={s.nav_links}>
            <NavLink to="/news" className={s.nav_link}>news</NavLink>
        </div>
        <div className={s.nav_links}>
            <NavLink to="/friends" className={s.nav_link}>friends</NavLink>
        </div>
        <div className={s.nav_links}>
            <NavLink to="/settings" className={s.nav_link}>settings</NavLink>
        </div>
    </nav>
}

export default Navbar;