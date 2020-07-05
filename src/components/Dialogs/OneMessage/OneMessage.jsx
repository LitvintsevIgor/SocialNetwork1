import React from "react";
import s from './../Dialogs.module.css';

const OneMessage = (props) => {
    return (
        <div className={s.oneMessage}>
            {props.message}
        </div>
    );
};


export default OneMessage;