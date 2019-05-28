import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    { id: 1, message: 'WTF?!' },
    { id: 2, message: 'It`s new post!'}
  ]

let postsElement = postData.map (posts => <Post message={posts.message} id={posts.id} />);

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;