import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
    postData:
        [
            { id: 1, message: 'WTF?!' },
            { id: 2, message: 'It`s new post!' }
        ]
}


it('new post should be added', () => {
    // 1. test data
    let action = addPost('You can do anuthing...');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. inspect
    expect(newState.postData.length).toBe(3);
});

//================================================================================================

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPost('You can do anuthing...');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. inspect
    expect(newState.postData[2].message).toBe('You can do anuthing...');
});

it('after Del length shouldn`t be decrement if ID is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. inspect
    expect(newState.postData.length).toBe(2);
});