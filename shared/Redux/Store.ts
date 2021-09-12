import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';
import { questionnaireNamesTypes } from '../../Views/Play/Q&A';

export type questionnaireProperties = {
    values: {
        allQuestions: number,
        answeredQuestions: number
    },
}

export type StoreType = {
    questionnaires: {
        [questionnaireName in questionnaireNamesTypes]: questionnaireProperties
    }
}



const composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export const StoreSignal = "StoreSignal"
