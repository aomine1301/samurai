import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus, updatePhotoThunk} from "../../redux/profile-reducer";
import {compose} from "redux";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return <Profile {...this.props}
                        profile={this.props.profile}
                        fullName={this.props.fullName}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        updatePhoto={this.props.updatePhotoThunk}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    image: state.profilePage.image,
    status: state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,updatePhotoThunk})
)(ProfileContainer)