import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile } from '../../state/profile-reducer'
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        profileAPI.getUsers(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);