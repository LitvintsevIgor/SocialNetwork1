import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src="https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg"
                    alt=""
                />
            </div>
            <div className={s.description}>avatar + description</div>
        </div>
    );
};

export default ProfileInfo;
