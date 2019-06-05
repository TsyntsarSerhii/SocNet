import { reredderAll } from "../render";

let state = {

    profilePage: {
        postData:
            [
                { id: 1, message: 'WTF?!' },
                { id: 2, message: 'It`s new post!' }
            ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
    };
    state.profilePage.postData.push(newPost);
    reredderAll(state);
}


export default state;