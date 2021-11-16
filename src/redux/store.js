import { createStore, combineReducers } from "redux";
import PhotoId from "./reducers/PhotoId";

const rootReducer = combineReducers({
    photo: PhotoId,
})

const store = createStore(rootReducer);

export default store;