let rerenderAll = () => {
   }

let state = {

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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderAll(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAll(state);
}

export const subscriber = (observer) => {
    rerenderAll = observer;  //pattern
}

export default state;