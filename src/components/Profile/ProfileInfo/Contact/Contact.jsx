import React from "react";
import classes from '../../ProfileInfo/ProfileInfo.module.css'


export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contactContainer}>
            <div className={classes.stolpFirst}>
                <b className={classes.title}>{contactTitle}</b>
            </div>
            <div>
                <a className={classes.contact} rel="noopener noreferrer" target="_blank"
                   href={contactValue}>{contactValue}</a>
            </div>
        </div>

    )
}
