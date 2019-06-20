import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../state/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
        return <MyPosts addPost={addPost}
          updateNewPostText={onPostChange}
          postData={state.profilePage.postData}
          newPostText={state.profilePage.newPostText} />
      }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;