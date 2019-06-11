import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../state/profile-reducer'


const MyPosts = (props) => {

  let postsElement = props.postData.map(posts => <Post message={posts.message} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder='Enter U post' />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;