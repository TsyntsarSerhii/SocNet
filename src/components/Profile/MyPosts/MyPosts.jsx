import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (pros) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='WTF?' />
        <Post message='IT`s new post' />
      </div>
    </div>
  )
}

export default MyPosts;