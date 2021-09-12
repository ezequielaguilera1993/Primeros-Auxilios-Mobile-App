import {
    ADD_ONE_ANSWERED
} from '../Actions/ActionsNames'

import { actionType } from '../Actions/Actions'
import { StoreType } from '../Store';
import { QAinitialState } from '../../../Views/Play/Q&A';

const initialState: StoreType = QAinitialState

export function defaultReducer(state: StoreType = initialState, action: actionType): StoreType {
    const type = action.type
    let questionnaires = state.questionnaires

    if (type === ADD_ONE_ANSWERED) {
        let payload = action.payload

        //Le sumo 1
        questionnaires[payload].values.answeredQuestions += 1

        return { ...state, questionnaires }
    }



    return state
};