import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id} />);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let messageText = e.target.value;
        props.updateNewMessageText(messageText)
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