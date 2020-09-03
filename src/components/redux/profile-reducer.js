const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDADE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, postMessage: "Hi, how are you?", likes: 5},
        {id: 2, postMessage: "It is my post", likes: 9},
        {id: 3, postMessage: "It is my post", likes: 9},
        {id: 4, postMessage: "It is my post", likes: 9},
        {id: 5, postMessage: "It is my post", likes: 9}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
};


const profileReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 6,
                    postMessage: state.newPostText,
                    likes: 0
                };
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
                };
            }
            case APDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                };
            }
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                };
            }
            default:
                return state;
        }
    }
;

export const addPostActionCreator = () => ({type: ADD_POST});
export const apdateNewPostTextActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;