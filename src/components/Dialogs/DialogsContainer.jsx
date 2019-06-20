import React from 'react'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../state/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (messageText) => {
                    store.dispatch(updateNewMessageTextCreator(messageText));
                }

                return <Dialogs updateNewMessageText={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogPage={state} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;