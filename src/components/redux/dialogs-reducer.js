const APDATE_NEW_MESSAGE_BODY = 'APDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Иван"},
        {id: 2, name: "Света"},
        {id: 3, name: "Петр"},
        {id: 4, name: "Антон"},
        {id: 5, name: "Олег"}
    ],
    messagesData: [
        {id: 1, message: "Привет Василий"},
        {id: 2, message: "Хохохо С днем рождения"},
        {id: 3, message: "Как дела?"},
        {id: 4, message: "Что расскажешь?"}
    ],

    newMessageBody: ""
};


const dialogsReducer = (state = initialState, action) => {

    // switch (action.type) {
    //     case APDATE_NEW_MESSAGE_BODY:
    //         state.newMessageBody = action.body;
    //         return state;
    //     case SEND_MESSAGE:
    //         let body = state.newMessageBody;
    //         state.newMessageBody = "";
    //         state.messagesData.push({id: 5, message: body});
    //         return state;
    //     default:
    //         return state;
    // }


    switch (action.type) {
        case APDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return  {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}],
                newMessageBody: "",
            };
        }
        default: {
            return state;
        }
    }
};




export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const apdateNewMessageBodyCreator = (body) => ({type: APDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;