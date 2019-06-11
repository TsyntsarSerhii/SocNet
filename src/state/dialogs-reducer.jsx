const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        case SEND_MESSAGE:
            let messageText = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({ id: 5, message: messageText });
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;