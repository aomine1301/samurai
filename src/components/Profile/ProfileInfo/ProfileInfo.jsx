import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../source/transparent.png'

const ProfileInfo = ({updateStatus, status, profile, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event) => {

        if (event.target.files.length) {
           savePhoto(event.target.files[0])
        }
        console.log(event)
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} className={classes.imageProfile} alt={'фото блять'}/>
                    <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                </div>
                <div className={classes.fullNameContainer}>
                    <div className={classes.description}>Name:<span
                        className={classes.fullName}>{profile.fullName}</span></div>
                    <div className={classes.description}>About me:<span
                        className={classes.fullName}>{profile.aboutMe}</span></div>
                    <div className={classes.description}>My Job:<span className={classes.fullName}>
                        {profile.lookingForAJob = true ? profile.lookingForAJobDescription : 'no job'}</span></div>
                </div>

            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}
export default ProfileInfo
