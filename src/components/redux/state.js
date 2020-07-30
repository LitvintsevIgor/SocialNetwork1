// let postData = [
//     {id: 1, postMessage: "Hi, how are you?", likes: 5},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9}
// ];
//
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



let rerenderEntireTree = () => {
console.log('vrvrvr')
};

let state = {

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
        ]
    }
}


export const addPost = () => {
    let newPost = {
        id: 6,
        postMessage: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree=observer;
}

export default state;