import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import meetings from "./meetings";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["meetings"],
};

const rootReducer = combineReducers({
    meetings,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
