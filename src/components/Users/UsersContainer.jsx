import { connect } from 'react-redux';
import Users from './Users';
import { FollowActionCreator, UnfollowActionCreator, SetUsersActionCreator } from '../../state/users-reduser';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(FollowActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(UnfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(SetUsersActionCreator(users));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);