import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helpers/obj-helpers';


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
                users: updateObjectInArray(state.users, action.userID, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", { followed: false })
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

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFeatching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFeatching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userID));

    let response = await apiMethod(userID)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(setFollowingInProgress(false, userID));
}

export const follow = (userID) => {
    return async (dispatch) => {
        followUnfollow(
            dispatch,
            userID,
            usersAPI.follow.bind(usersAPI),
            followSuccess,
        )
    };
}

export const unfollow = (userID) => {
    return async (dispatch) => {
        followUnfollow(
            dispatch,
            userID,
            usersAPI.unfollow.bind(usersAPI),
            unfollowSuccess,
        )
    };
}


export default usersReducer;