import { combineReducers } from "redux";
import { defaultReducer } from "./defaultReducer";


export const rootReducer = combineReducers({
    defaultReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const ReducerIndexSignal = "ReducerIndexSignal"