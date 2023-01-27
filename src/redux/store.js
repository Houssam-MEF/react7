import { combineReducers, createStore } from "redux";
import FirstRed from "./Reducers/FirstRed";

const rootReducer = combineReducers({
    FirstRed
})

const store = createStore(rootReducer);

export default store;

