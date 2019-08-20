import React from 'react';
import { NavLink } from 'react-router-dom';

import userPHOTO from '../../assets/imeges/USER.png';

import s from './Users.module.scss';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChange(p) }}>{p}</span>
            })}
        </div>
        <div className={s.user_grid}>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={s.userPhoto}>
                                    <img src={u.photos.small != null ? u.photos.small : userPHOTO}
                                        alt="AVATAR" />
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                    onClick={() => { props.unfollow(u.id) }} className={s.unfollow}>Unfollow</button>
                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                    onClick={() => { props.follow(u.id) }} className={s.follow}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div className={s.name}>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    </div>
}

export default Users;