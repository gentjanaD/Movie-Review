import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./movieReducer";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({ movieReducer, categoryReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
