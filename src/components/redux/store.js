import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, postMessage: "Hi, how are you?", likes: 5},
                {id: 2, postMessage: "It is my post", likes: 9},
                {id: 3, postMessage: "It is my post", likes: 9},
                {id: 4, postMessage: "It is my post", likes: 9},
                {id: 5, postMessage: "It is my post", likes: 9}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('vrvrvr');
    },

    getState() {
        debugger;
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};








export default store;