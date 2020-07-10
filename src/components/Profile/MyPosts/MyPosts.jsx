import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";






const MyPosts = (props) => {

    // let postData = [
//     {id: 1, postMessage: "Hi, how are you?", likes: 5},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9}
// ];

    let postElement = props.postData.map(post => (<Post id={post.id} message={post.postMessage} likesCount={post.likes}/>));

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
