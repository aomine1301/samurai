import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../source/transparent.png'

import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";


const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {
    let [editMode, setEditMOde] = useState(false)
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMOde(false)
        })



    }
    return (
        <div>
            <div className={classes.containerBlock}>
                <div className={classes.descriptionBlock}>
                    <div>
                        <img className={classes.imageProfile} src={profile.photos.large || userPhoto} alt=""/>

                        <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
                        <ProfileStatusWithHooks className={classes.containerStatus} status={status}
                                                updateStatus={updateStatus}/>
                    </div>
                </div>
                {editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        onSubmit={onSubmit}
                        profile={profile}
                        isOwner={isOwner}
                        savePhoto={savePhoto}/>
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        savePhoto={savePhoto}
                        goToEditMode={() => {
                            setEditMOde(true)
                        }}/>}

            </div>

        </div>
    )
}


export default ProfileInfo
