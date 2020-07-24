import React from "react";
import {AddPostCreateAction, NewPostTextCreateAction} from "../../../Redux/content-reducer";
import MyPost from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        post:state.contentPage.post,
        newTextPost:state.contentPage.newTextPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(AddPostCreateAction())},
        newPostText:(text) => {dispatch(NewPostTextCreateAction(text))}
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostContainer;