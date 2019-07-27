import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElement = props.postData.map(posts => <Post message={posts.message} />);
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText (text);
  }
  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder='Enter U post' />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;