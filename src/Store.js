import { createStore } from "redux";
import rootreducer from "./Redux/Reducers/Main";

const store = createStore(rootreducer);

export default store;


