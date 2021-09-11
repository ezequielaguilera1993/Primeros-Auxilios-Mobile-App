import {
    ADD_ONE_ANSWERED
} from '../Actions/ActionsNames'

import { actionType } from '../Actions/Actions'
import { StoreType } from '../Store';
import { QAinitialState } from '../../../Views/Play/Q&A';

const initialState: StoreType = QAinitialState

export const defaultReducer = (state: StoreType = initialState, action: actionType) => {
    const type = action.type
    let questionnaires = state.questionnaires

    if (type === "ADD_ONE_ANSWERED") {
        return
    }

    return state
};