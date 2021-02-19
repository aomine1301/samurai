import classes from "../ProfileInfo.module.css";
// import {ModalWindow} from "../../../source/modal/Modal";
import React from "react";
import {Contact} from "../Contact/Contact";
import {Setting} from "../../../source/setting/Setting";

export const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (
        <div className={classes.containerFlex}>

            <div className={classes.description}>
                <div>
                    <b>Name:</b><span className={classes.fullName}>{profile.fullName}</span>
                </div>
                <div>
                    <b>Looking for a Job:</b><span
                    className={classes.fullName}>{profile.lookingForAJob ? "yes" : "no"}</span>
                </div>
                <div>
                    <b>My professional skills:</b><span
                    className={classes.fullName}>{profile.lookingForAJobDescription}</span>
                </div>
                <div>
                    <b>About me:</b><span className={classes.fullName}>{profile.aboutMe}</span>
                </div>
                <div className={classes.description}>
                    <b>Contacts:</b><span
                    className={classes.fullName}>{Object.keys(profile.contacts).map((key, idx) => {
                    return (
                        <Contact contactTitle={key} contactValue={profile.contacts[key]} key={idx}/>
                    )

                })}</span>
                </div>
            </div>

            <div>{isOwner && <div>
                <button className={classes.buttonSettings} onClick={goToEditMode}><Setting/></button>
            </div>}
            </div>
            {/*<ModalWindow/>*/}

        </div>

    )
}
