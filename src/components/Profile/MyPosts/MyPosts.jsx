import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'


const MyPosts = (props) => {

  let postsElement = props.postData.map(posts => <Post message={posts.message} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <div>
      My posts
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" placeholder="Enter U post" />
      </div>
      <div>
        <button>Share</button>
      </div>
    </form>
  )
}
const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;