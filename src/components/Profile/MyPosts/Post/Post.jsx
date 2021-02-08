import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwInzeJib0hbXMbYBxjzlmWIlGERaMoxMY8w&usqp=CAU"
            alt="alt"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCounts}
            </div>
        </div>
    )
}
export default Post