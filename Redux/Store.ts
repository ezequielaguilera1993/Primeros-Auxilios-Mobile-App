import { createStore, applyMiddleware, compose, AnyAction, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from './Reducers';
import { questionnaireNamesTypes } from '../Views/Play/Q&A/Q&A';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
import { defaultReducer } from './Reducers/defaultReducer';
import { actionType } from './Actions/Actions';

export type questionnaireValues = { //Para usar solo esto en otros lados
    allQuestions: number,
    answeredQuestions: number[]
}
export type questionnaireProperties = {
    values: questionnaireValues
}

export type StoreType = {
    questionnaires: {
        [questionnaireName in questionnaireNamesTypes]: questionnaireProperties
    }
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer<RootState, any>(persistConfig, rootReducer)

const composeEnhancers = compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)

export const StoreSignal = "StoreSignal"
