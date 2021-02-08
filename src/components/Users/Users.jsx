import React from "react";
import classes from './users.module.css'
import Avatar from "../source/transparent.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize,users, ...props}) => {
    return (
        <div className={classes.users_body}>
            {users.map(u => <div className={classes.user} key={u.id}>
            <span>
                <div className={classes.flex}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : Avatar} alt="" className={classes.img}/>
                    </NavLink>
                </div>
                <div className={classes.button}>{u.followed
                    ? <button className={classes.red}
                              disabled={props.followingInProgress}
                              onClick={() => {
                                  props.unFollow(u.id)
                              }}>Unfollow</button>
                    : <button className={classes.green}
                              disabled={props.followingInProgress}
                              onClick={() => {
                                  props.follow(u.id)
                              }}>Follow</button>}
                    </div>
                    </div>
                    </span>
                    <div className={classes.name_status}>
                        <div>{u.name}</div>
                        <div className={classes.status}>{u.status}</div>
                    </div>
                    <div className={classes.country_city}>
                        <div>{"country"}</div>
                        <div>{"city"}</div>
                    </div>
                </div>
            )
            }
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
    )
}
export default Users
