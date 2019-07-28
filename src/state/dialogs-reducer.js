const SEND_MESSAGE = 'SEND-MESSAGE';


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
        ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messageText = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 5, message: messageText }]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;