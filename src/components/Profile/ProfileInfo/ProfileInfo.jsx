import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../source/transparent.png'
import {Setting} from "../../source/setting/Setting";
import {ModalWindow} from "../../source/modal/Modal";


const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto}) => {

    let [modalMode, setModalMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={classes.containerBlock}>
                <div className={classes.descriptionBlock}>
                    <div>
                        <img className={classes.imageProfile} src={profile.photos.large || userPhoto} alt=""/>
                        <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
                    </div>
                    <div className={classes.description}>Name:<span
                        className={classes.fullName}>{profile.fullName}</span></div>
                </div>
                <button onClick={() => setModalMode(!modalMode)}> tik</button>
                <Setting setModalMode={setModalMode} modalMode={modalMode}/>

            </div>

            <ProfileStatusWithHooks className={classes.containerStatus} status={status} updateStatus={updateStatus}/>
        </div>
    )
}
export default ProfileInfo
