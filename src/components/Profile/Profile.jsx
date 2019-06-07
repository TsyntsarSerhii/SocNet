import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost} />
    </div>
  )
}

export default Profile;