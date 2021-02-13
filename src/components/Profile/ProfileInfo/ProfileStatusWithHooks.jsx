import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css'


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus =(e)=>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={classes.containerStatus}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >{props.status || '-------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode}
                value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks
