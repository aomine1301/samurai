import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to="/profile"><img src="http://pngimg.com/uploads/linux/linux_PNG44.png" alt="alt"/></NavLink>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}<br/>
                        <button onClick={props.logout} className={classes.button}>Log out</button>
                    </div>
                    : <NavLink to={"/login"} className={classes.loginLink}>
                        <button className={classes.button}>Login</button>
                    </NavLink>}
            </div>
        </header>
    )
}
export default Header