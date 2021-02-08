import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsContlols";
import {maxLengthCreator, required} from "../utils/validators/validator";

const maxLength50 = maxLengthCreator(50)

const Dialogs = (props) => {

    let DialogsElement = props.messagesPage.dialogs
        .map((d,idx) => <div className={classes.inline} key={idx + 1}>
            <div>
                <img className={classes.avaMessage} key={idx + 1} src={props.messagesPage.avatarMessage[2]} alt="alt"/>
            </div>
            <div><DialogItem name={d.name} key={idx} id={d.id + 1}/></div>
        </div>)

    let messageElements = props.messagesPage.messages
        .map((m,idx) => <Message message={m.message} key={idx}/>)


    let addNewMessage = (values)=>{
        props.addMessages(values.newMessageBody)

    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {DialogsElement}
            </div>
            <div className={classes.messages}>
                <div>
                    {messageElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )

}
const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required,maxLength50]} name="newMessageBody" className={classes.textarea}
                   placeholder="Enter your message"/>

            <div>
                <button className={classes.button}>Send messages</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)

export default Dialogs


