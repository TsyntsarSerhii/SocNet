import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} className={s.logoutBTN}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;