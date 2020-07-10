import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData} />
        </div>
    );
};

export default Profile;
