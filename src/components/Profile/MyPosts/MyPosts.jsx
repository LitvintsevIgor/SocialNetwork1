import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../redux/profile-reducer";



const MyPosts = (props) => {

    let postElement = props.postData.map(post => (<Post id={post.id} message={post.postMessage} likesCount={post.likes}/>));

    let newPostElement = React.createRef();

    let onAddPost = ()=> {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
