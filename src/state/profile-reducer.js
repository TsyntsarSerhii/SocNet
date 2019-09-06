import { profileAPI } from '../api/api'


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postData:
        [
            { id: 1, message: 'WTF?!' },
            { id: 2, message: 'It`s new post!' }
        ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status };
        }

        case DELETE_POST: {
            return { ...state, postData: state.postData.filter(p => p.postId !== action.postId) };
        }

        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })   // ACTION CREATOR
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}


export default profileReducer;