import React from "react";
import classes from './users.module.css'
import Avatar from "../source/transparent.png";
import {NavLink} from "react-router-dom";


let User = ({user,followingInProgress,unFollow,follow,photo}) => {
    return (
        <div className={classes.users_body}>
            {/*{users.map(user => <div className={classes.user} key={user.id}>*/}
            <span>
                <div className={classes.flex}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : Avatar} alt="" className={classes.img}/>
                    </NavLink>
                </div>
                <div className={classes.button}>{user.followed
                    ? <button className={classes.red}
                              disabled={followingInProgress}
                              onClick={() => {
                                  unFollow(user.id)
                              }}>Unfollow</button>
                    : <button className={classes.green}
                              disabled={followingInProgress}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>}
                    </div>
                    </div>
                    </span>
            <div className={classes.name_status}>
                <div>{user.name}</div>
                <div className={classes.status}>{user.status}</div>
                
            </div>
            <div className={classes.country_city}>
                <div>{"country"}</div>
                <div>{"city"}</div>
            </div>
        </div>
    )
    // }
    // </div>

}
export default User