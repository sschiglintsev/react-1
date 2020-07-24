import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {FollowCreateAction, setUsersCreateAction, UnFollowCreateAction} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowCreateAction(userId))
        },
        unfollow: (userId) => {
            dispatch(UnFollowCreateAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreateAction(users))
        }

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;