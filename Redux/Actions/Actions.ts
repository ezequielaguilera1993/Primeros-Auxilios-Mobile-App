import { Dispatch } from 'redux';
import axios from 'axios';
import {
    ADD_ONE_ANSWERED
} from './ActionsNames'

import { questionnaireNamesTypes } from '../../Views/Play/Q&A/Q&A';


export type actionType = addOneAnsweredType | reset



export type addOneAnsweredPayload = {
    questionnaireName: questionnaireNamesTypes,
    questionNumber: number
}
export type addOneAnsweredType = {
    type: typeof ADD_ONE_ANSWERED,
    payload: addOneAnsweredPayload
}



export type reset = {
    type: "RESET"
}

export function addOneAnswered(payload: addOneAnsweredPayload): actionType {
    return {
        type: ADD_ONE_ANSWERED,
        payload
    }
}

export function reset(): actionType {
    return {
        type: "RESET",
    }
}








