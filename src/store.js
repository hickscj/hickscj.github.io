import { createStore, combineReducers } from "redux";
import { jobs } from "./reducers";

const reducers = {
    jobs,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
