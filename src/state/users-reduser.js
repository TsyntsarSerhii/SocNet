const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const URLPHOTO = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg'

let initialState = {
    users:[ 
        { id: 1, photoUrl: URLPHOTO, followed: false, fullName: 'Serhii T', status: '123', location: { city: 'Hus', country: 'Ukr' } },
        { id: 2, photoUrl: URLPHOTO, followed: false, fullName: 'And V', status: '123', location: { city: 'Lviv', country: 'Ukr' } },
        { id: 3, photoUrl: URLPHOTO, followed: true, fullName: 'Pav V', status: '123', location: { city: 'Hus', country: 'Ukr' } }
    ]
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
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const FollowActionCreator = (userID) => ({ type: FOLLOW, userID })
export const UnfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID })
export const SetUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer;