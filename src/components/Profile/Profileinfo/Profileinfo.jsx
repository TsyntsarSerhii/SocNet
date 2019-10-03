import React, { useState } from 'react';

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/imeges/USER.png';
import ProfileDataForm from './ProfileDataForm';

import s from './ProfileInfo.module.scss';


const ProfileInfo = ({ profile, saveProfile, ...props }) => {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return (<Preloader />)
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  const mainPhotoSelect = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={s.content}>
      <img src={profile.photos.small || userPhoto} alt="AVATAR" className={s.userPhoto} />
      <div>
        {props.isOwner && <input type={'file'} onChange={mainPhotoSelect} />}
      </div>
      {editMode
        ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={props.isOwner} />
      }
      <b><ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} /> </b>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>
        <b>{profile.fullName}</b>
      </div>
      {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
      <div>
        <b> Looking for work:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b> My proffesional skills:</b> {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {
          Object.keys(profile.contacts).map(key => {
            return (
              <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            )
          })
        }
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      {contactTitle} : {contactValue}
    </div>
  )
}

export default ProfileInfo;