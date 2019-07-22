import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile } from '../../state/profile-reducer'
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1256;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);