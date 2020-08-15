import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./OneMessage/OneMessage";
import {apdateNewMessageBodyCreator, sendMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        apdateNewMessageBody: (body) => {
            dispatch(apdateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());


        }
    };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;