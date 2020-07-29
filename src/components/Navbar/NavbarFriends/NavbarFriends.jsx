import React from "react";
import s from "./NavbarFriends.module.css";



const NavbarFriends = ()=>{
    return (
        <div className={s.navbarFriends}>
            <h2>Friends</h2>
            <div className={s.navbarFriendsItems}>
                <div className={s.friendsCard}>
                    <div className={s.friendsPhoto}></div>
                    <div>Костя</div>
                </div>
                <div className={s.friendsCard}>
                    <div className={s.friendsPhoto}></div>
                    <div>Саша</div>
                </div>
                <div className={s.friendsCard}>
                    <div className={s.friendsPhoto}></div>
                    <div>Дима</div>
                </div>
            </div>
        </div>
    )
};

export default NavbarFriends;