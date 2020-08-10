const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDADE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, postMessage: "Hi, how are you?", likes: 5},
        {id: 2, postMessage: "It is my post", likes: 9},
        {id: 3, postMessage: "It is my post", likes: 9},
        {id: 4, postMessage: "It is my post", likes: 9},
        {id: 5, postMessage: "It is my post", likes: 9}
    ],
    newPostText: 'it-kamasutra.com'
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                postMessage: state.newPostText,
                likes: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case APDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const apdateNewPostTextActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;