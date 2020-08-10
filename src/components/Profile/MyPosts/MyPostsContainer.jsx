import React from "react";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = ()=> {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = apdateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (< MyPosts  addPost={addPost}
                       updateNewPostText={onPostChange}
                       postData={state.profilePage.postData}
                       newPostText={state.profilePage.newPostText}
    />);
};

export default MyPostsContainer;
