export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPages = (state) => {
    return state.usersPage.currentPages;
}

export const getIsFeatching = (state) => {
    return state.usersPage.isFeatching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}