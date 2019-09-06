import React from 'react';

import Paginations from '../common/Paginations/Paginations';
import User from './User';

import s from './Users.module.scss';


let Users = ({
    onPageChange,
    selectedPage,
    currentPage,
    totalUsersCount,
    pageSize,
    users,
    followingInProgress,
    unfollow,
    follow
}) => {
    return <div>
        <Paginations
            currentPage={currentPage}
            selectedPage={selectedPage}
            onPageChange={onPageChange}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
        />
        <div className={s.user_grid}>
            {
                users.map(u =>
                    <User
                        user={u}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow}
                        key={u.id}
                    />
                )}
        </div>
    </div>
}

export default Users;