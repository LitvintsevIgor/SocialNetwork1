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

let state = {

    profilePage: {
        postData: [
            {id: 1, postMessage: "Hi, how are you?", likes: 5},
            {id: 2, postMessage: "It is my post", likes: 9},
            {id: 2, postMessage: "It is my post", likes: 9},
            {id: 2, postMessage: "It is my post", likes: 9},
            {id: 2, postMessage: "It is my post", likes: 9}
        ]
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

export default state;