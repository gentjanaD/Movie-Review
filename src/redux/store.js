import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extenson";
import reducer from "./movieReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
