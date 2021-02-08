import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsContlols";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postsElement = props.posts
        .map(p => <Post message={p.message} key={p.id} likesCounts={p.likeCounts}/>)

    let addAddNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <PostFormRedux onSubmit={addAddNewPost}/>
                <div className={classes.posts}>
                    {postsElement}
                </div>
            </div>

        </div>
    )
});

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostBody'
                       placeholder="Enter your post message" validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const PostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(PostForm)
export default MyPosts