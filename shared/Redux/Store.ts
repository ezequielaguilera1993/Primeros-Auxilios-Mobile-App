import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';

export type cuetionaryType = {
    name: string,
    values: {
        allQuestions: number,
        answeredQuestions: number
    },
}

export type StoreType = {
    questionnaires: cuetionaryType[]
}


const composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export const StoreSignal = "StoreSignal"
