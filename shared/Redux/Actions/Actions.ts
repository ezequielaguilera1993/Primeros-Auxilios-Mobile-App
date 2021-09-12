import { Dispatch } from 'redux';
import axios from 'axios';
import {
    ADD_ONE_ANSWERED
} from './ActionsNames'

import { questionnaireNamesTypes } from '../../../Views/Play/Q&A';


export type actionType = addOneAnswered | scaleInThisWay


type addOneAnswered = {
    type: typeof ADD_ONE_ANSWERED,
    payload: questionnaireNamesTypes
}

type scaleInThisWay = {
    type: "SCALE_IN_THIS_WAY",
    payload: "scaleInThisWay"
}

export function addOneAnswered(payload: questionnaireNamesTypes): actionType {
    return {
        type: ADD_ONE_ANSWERED,
        payload
    }
}








