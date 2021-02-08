import React from "react";
import {follow, requestUsers, setCurrentPage, toggleIsFollowingProgress, unFollow} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber ,this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state) ,
        isAuth : getIsAuth(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
    {setCurrentPage,toggleIsFollowingProgress,getUsers: requestUsers,unFollow,follow})
)(UsersContainer)
