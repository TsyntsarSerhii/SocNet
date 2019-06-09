
let store = {
    _state: {

        profilePage: {
            postData:
                [
                    { id: 1, message: 'WTF?!' },
                    { id: 2, message: 'It`s new post!' }
                ],
            newPostText: 'Add post'
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
        },
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this.rerenderAll = observer;  //pattern
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderAll(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderAll(this._state);
        }
    },
}

export default store;

//Store OOP