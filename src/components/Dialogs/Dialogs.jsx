import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./OneMessage/OneMessage";




const Dialogs = (props) => {



    // let dialogsData = [
    //     {id: 1, name: "Иван"},
    //     {id: 2, name: "Света"},
    //     {id: 3, name: "Петр"},
    //     {id: 4, name: "Антон"},
    //     {id: 5, name: "Олег"}
    // ];
    //
    // let messagesData = [
    //     {id: 1, message: "Привет Василий"},
    //     {id: 2, message: "Хохохо С днем рождения"},
    //     {id: 3, message: "Как дела?"},
    //     {id: 4, message: "Что расскажешь?"}
    // ];


    let dialogsElements = props.state.dialogsData.map( dialogs => (
        <DialogItem id={dialogs.id} name={dialogs.name} />
    ));

    let messagesElements = props.state.messagesData.map( message => (
        <OneMessage id={message.id} message={message.message} />
    ));

    let messageElement = React.createRef();

    let sentMessage = () => {
        let message = messageElement.current.value;
        alert(message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={messageElement}></textarea>
                <div>
                    <button onClick={sentMessage}>Отправить</button>
                </div>

            </div>

        </div>
    );
};

export default Dialogs;