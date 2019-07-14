const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData:
        [
            { id: 1, message: 'Hey' },
            { id: 2, message: 'man' },
            { id: 3, message: 'How are U?' },
            { id: 4, message: 'Duh...' }
        ],
    dialogsData:
        [
            { id: 1, name: 'Serh' },
            { id: 2, name: 'And' },
            { id: 3, name: 'Ih' },
            { id: 4, name: 'Pav' },
            { id: 5, name: 'Ole' }
        ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
            };
        case SEND_MESSAGE:
            let messageText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: 5, message: messageText }]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (messageText) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText })

export default dialogsReducer;