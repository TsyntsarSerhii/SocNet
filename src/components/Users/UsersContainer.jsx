import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    setFollowingInProgress,
} from '../../state/users-reduser';
import Users from './Users'
import React from 'react';
import Preloader from '../common/Preloader/Preloader.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, setFollowingInProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)