import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from"./ProfileStatus"

const ProfileInfo = (props) => {

    if (! props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg"*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={s.description}>
                <img src={props.profile.photos.large} alt=""/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.instagram}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
