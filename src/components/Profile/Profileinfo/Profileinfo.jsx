import React from 'react';

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/imeges/USER.png';

import s from './ProfileInfo.module.scss';


let NONE = 'NONE';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (<Preloader />)
  }

  const mainPhotoSelect = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.content}>
      <div>
        <img src={props.profile.photos.small || userPhoto} alt="AVATAR" className={s.userPhoto} />
        <div>
          {props.isOwner && <input type={'file'} onChange={mainPhotoSelect} />}
        </div>
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
        <p>Contacts:</p>
        <ul>
          <li>facebook:  {props.profile.contacts.facebook != null ? props.profile.contacts.facebook : NONE}</li>
          <li>website:  {props.profile.contacts.website != null ? props.profile.contacts.website : NONE}</li>
          <li>vk:  {props.profile.contacts.vk != null ? props.profile.contacts.vk : NONE}</li>
          <li>twitter:  {props.profile.contacts.twitter != null ? props.profile.contacts.twitter : NONE}</li>
          <li>instagram:  {props.profile.contacts.instagram != null ? props.profile.contacts.instagram : NONE}</li>
          <li>yuotube:  {props.profile.contacts.youtube != null ? props.profile.contacts.youtube : NONE}</li>
          <li>github:  {props.profile.contacts.github != null ? props.profile.contacts.github : NONE}</li>
          <li>mainLink: {props.profile.contacts.mainLink != null ? props.profile.contacts.mainLink : NONE}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo;