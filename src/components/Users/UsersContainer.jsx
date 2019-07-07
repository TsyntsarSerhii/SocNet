import { connect } from 'react-redux';
import Users from './Users';
import { FollowActionCreator, UnfollowActionCreator, SetUsersActionCreator, SetCurrentPageActionCreator, SetTotalUsersCountActionCreator } from '../../state/users-reduser';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setPage: (pageNumber) => {
            dispatch(SetCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(SetTotalUsersCountActionCreator(totalCount));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);