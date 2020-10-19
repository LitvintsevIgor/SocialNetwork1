import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./OneMessage/OneMessage";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialogs => (
        <DialogItem id={dialogs.id} key={dialogs.id} name={dialogs.name}/>
    ));

    let messagesElements = state.messagesData.map(message => (
        <OneMessage id={message.id} key={message.id} message={message.message}/>
    ));

    let newMessageBody = state.newMessageBody;

    let messageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.apdateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Введите свое сообщение"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;