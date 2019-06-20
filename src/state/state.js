/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {

        profilePage: {
            postData:
                [
                    { id: 1, message: 'WTF?!' },
                    { id: 2, message: 'It`s new post!' }
                ],
            newPostText: ''
        },

        dialogPage: {
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
        },
    }, 

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderAll = observer;  //pattern
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this.rerenderAll(this._state);
    }
}

export default store;
*/