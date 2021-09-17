import {
    ADD_ONE_ANSWERED
} from '../Actions/ActionsNames'

import { actionType } from '../Actions/Actions'
import { StoreType } from '../Store';
import { QAinitialState } from '../../Views/Play/Q&A/Q&A';

const initialState: StoreType = QAinitialState

export function defaultReducer(state: StoreType = initialState, action: actionType): StoreType {
    const type = action.type
    let questionnaires = state.questionnaires


    if (type === "RESET") {
        return initialState
    }

    if (type === ADD_ONE_ANSWERED) {
        let questionnaireName = action.payload.questionnaireName
        let questionNumber = action.payload.questionNumber

        questionnaires[questionnaireName].values.answeredQuestions.push(questionNumber)

        return { ...state, questionnaires }
    }



    return state
};