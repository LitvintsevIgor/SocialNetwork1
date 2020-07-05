import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/";
    return (
        <div className={s.dialogItem}>
            <NavLink to={path + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;