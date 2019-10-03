import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


let maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  let postsElement = props.postData.map(posts => <Post key={posts.id} message={posts.message} />);
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
        <Field component={Textarea} name="newPostText" placeholder="Enter U post"
          validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Share</button>
      </div>
    </form>
  )
}
const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;