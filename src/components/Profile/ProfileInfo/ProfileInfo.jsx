import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.imgContainer}></div>
            <div className={classes.descriptionBlock}>
                <div className={classes.imageProfile}>
                    {props.updatePhoto ? <img className={classes.img} src={props.image} alt=""/> :false }
                </div>
                <div className={classes.fullNameContainer}>
                    <div className={classes.description}>Name:<span className={classes.fullName}>{props.profile.fullName}</span></div>
                    <div className={classes.description}>About me:<span className={classes.fullName}>{props.profile.aboutMe}</span></div>
                    <div className={classes.description}>My Job:<span className={classes.fullName}>
                        {props.profile.lookingForAJob = true ? props.profile.lookingForAJobDescription : 'no job'}</span></div>
                </div>

            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}
export default ProfileInfo
