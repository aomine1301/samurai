import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} image={props.image}
                         updateStatus={props.updateStatus} updatePhoto={props.updatePhotoThunk}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
