import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./OneMessage/OneMessage";
import {apdateNewMessageBodyCreator, sendMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state =props.store.getState().dialogsPage;


    let newMessageBody = state.newMessageBody;

    let messageElement = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(apdateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs apdateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    );
};

export default DialogsContainer;