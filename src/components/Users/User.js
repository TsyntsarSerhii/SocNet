import React from 'react';
import { NavLink } from 'react-router-dom';

import userPHOTO from '../../assets/imeges/USER.png';

import s from './Users.module.scss';


let User = ({ user, followingInProgress, unfollow, follow }) => {
    return <div>
        <div key={user.id} className={s.user}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <div className={s.userPhoto}>
                            <img src={user.photos.small != null ? user.photos.small : userPHOTO}
                                alt="AVATAR" />
                        </div>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }} className={s.unfollow}>Unfollow</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { follow(user.id) }} className={s.follow}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div className={s.name}>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    </div>
}

export default User;