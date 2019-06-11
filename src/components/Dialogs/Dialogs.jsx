import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../state/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messagesData.map(message => <Message message={message.message} />);
    let newMessageText = state.newMessageText;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let messageText = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(messageText));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                    <div> 
                        <textarea value={newMessageText}
                            onChange={onNewMessageChange}
                            placeholder='Enter U message' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;