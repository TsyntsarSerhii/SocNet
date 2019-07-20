import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFeatching,
    setFollowingInProgress,
} from '../../state/users-reduser';
import Users from './Users'
import React from 'react';
import Preloader from '../common/Preloader/Preloader.js';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFeatching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFeatching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFeatching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFeatching(false);
            this.props.setUsers(data.items);
        });
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
                setFollowingInProgress={this.props.setFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeatching: state.usersPage.isFeatching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFeatching,
    setFollowingInProgress
})(UsersContainer);