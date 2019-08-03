import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FEATCHING = 'IS_FEATCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 16,
    totalUsersCount: 0,
    currentPage: 1,
    isFeatching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case IS_FEATCHING: {
            return { ...state, isFeatching: action.isFeatching }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFeatching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID })
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFeatching = (isFeatching) => ({ type: IS_FEATCHING, isFeatching })
export const setFollowingInProgress = (isFeatching, userID) => ({ type: FOLLOWING_IN_PROGRESS, isFeatching, userID })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFeatching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFeatching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userID));
        usersAPI.follow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(setFollowingInProgress(false, userID));
        });
    };
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userID));
        usersAPI.unfollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(setFollowingInProgress(false, userID));
        });
    };
}


export default usersReducer;