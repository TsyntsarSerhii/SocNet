import React from 'react'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../state/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (messageText) => {
        props.store.dispatch(updateNewMessageTextCreator(messageText));
    }

    return (
        <Dialogs updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogPage={state} />
    )
}

export default DialogsContainer;