import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    // let postData = [
    //     {id: 1, postMessage: "Hi, how are you?", likes: 5},
    //     {id: 2, postMessage: "It is my post", likes: 9},
    //     {id: 2, postMessage: "It is my post", likes: 9},
    //     {id: 2, postMessage: "It is my post", likes: 9},
    //     {id: 2, postMessage: "It is my post", likes: 9}
    // ];

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile"
                           render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
