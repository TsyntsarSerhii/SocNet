import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form"
import thunk from "redux-thunk"

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Redux ADD or compose
const middleware = [thunk];
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))

export default store;