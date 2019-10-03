import React from 'react';
import { reduxForm } from 'redux-form';

import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';


const ProfileDataForm = ({ handleSubmit, profile }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button onClick={() => { }}>Save</button></div>
            <div>
                <b> Full name:</b> {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b> Looking for work:</b>
                {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b> My proffesional skills:</b>
                {createField('My proffesional skills:', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
                            </div>
                        )
                    })
                }
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;