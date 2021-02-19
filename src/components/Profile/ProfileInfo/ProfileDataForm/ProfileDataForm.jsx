import React from "react";
import classes from "../ProfileInfo.module.css";
// import {ModalWindow} from "../../../source/modal/Modal";
import {CreateField, Input, Textarea} from "../../../common/FormsControls/FormsContlols";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, isOwner, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

            <div className={classes.description}>
                <b>Name:</b><span className={classes.fullName}>
                {CreateField("Full Name", "fullName", [], Input)}</span>
                <div className={classes.description}>
                    <b>Looking for a Job:</b><span className={classes.fullName}>
                    {CreateField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
                </span>
                </div>
                <div className={classes.description}>
                    <b>My professional skills:</b><span className={classes.fullName}>

                    {CreateField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </span>
                </div>
                <div className={classes.description}>
                    <b>About me:</b><span className={classes.fullName}>

                    {CreateField("About me", "aboutMe", [], Textarea)}
                </span>
                </div>
                <div className={classes.description}>
                    {error && <div className={classes.formSummaryError}>{error}</div>}
                    <b>Contacts:</b><span
                    className={classes.fullName}>{Object.keys(profile.contacts).map((key, idx) => {
                    return (

                        <div className={classes.contact} key={idx}>

                            <b>{key}: {CreateField(key, "contacts." + key, [], Input)}</b>

                        </div>

                    )

                })}</span>
                </div>
                {isOwner && <div>
                    <button>Save</button>
                </div>}

            </div>


            {/*<ModalWindow/>*/}

        </form>
    )


}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm
