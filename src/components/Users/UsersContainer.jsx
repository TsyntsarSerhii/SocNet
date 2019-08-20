import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import {
    follow,
    unfollow,
    requestUsers,
    setCurrentPage,
    setFollowingInProgress,
} from '../../state/users-reducer';
import {
    getCurrentPages,
    getFollowingInProgress,
    getIsFeatching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../state/users-selectors';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFeatching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeatching: state.usersPage.isFeatching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPages(state),
        isFeatching: getIsFeatching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, setFollowingInProgress, requestUsers
    }),
    withAuthRedirect
)(UsersContainer)