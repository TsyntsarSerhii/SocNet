import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../state/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1256;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus} />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)