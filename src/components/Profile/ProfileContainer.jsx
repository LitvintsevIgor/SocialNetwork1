import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../Hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    componentDidMount() {

        let userID = this.props.match.params.userID;

        if (!userID){
            userID = 10999;
        }

        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }

    render() {



        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);




