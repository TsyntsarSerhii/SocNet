import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

//props for 
const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name="Serh0" id="0" />
                <DialogItem name="Serh1" id="1" />
                <DialogItem name="Serh2" id="2" />
                <DialogItem name="Serh3" id="3" />
                <DialogItem name="Serh4" id="4" />
                <DialogItem name="Serh5" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hey" />
                <Message message="man" />
                <Message message="HHow are U?" />
            </div>
        </div>
    );
}

export default Dialogs;