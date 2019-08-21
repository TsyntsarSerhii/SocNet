import React, { useState, useEffect } from 'react';


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}>
                        {props.status || "What's on your mind?"}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        onChange={onStatusChange}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;