import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./OneMessage/OneMessage";


let dialogsData = [
    {id: 1, name: "Иван"},
    {id: 2, name: "Света"},
    {id: 3, name: "Петр"},
    {id: 4, name: "Антон"},
    {id: 5, name: "Олег"}
];

let messagesData = [
    {id: 1, message: "Привет Василий"},
    {id: 2, message: "Хохохо С днем рождения"},
    {id: 3, message: "Как дела?"},
    {id: 4, message: "Что расскажешь?"}
];


let dialogsElements = dialogsData.map( dialogs => (
    <DialogItem id={dialogs.id} name={dialogs.name} />
));

let messagesElements = messagesData.map( message => (
    <OneMessage id={message.id} message={message.message} />
));

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;