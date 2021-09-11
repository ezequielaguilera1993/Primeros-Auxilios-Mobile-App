import { Dispatch } from 'redux';
import axios from 'axios';
import {
    ADD_ONE_ANSWERED
} from './ActionsNames'






export type actionType = addOneAnswered


type addOneAnswered = {
    type: typeof ADD_ONE_ANSWERED,
    payload: "InfartoAcv" | "Infarto" | "Acv" | "Heimlich" | "HeimlichBebés" | "HeimlichAdultos" | "Rcp" | "RcpBebés" | "RcpAdultos"
}


export function deleteSensorEvent(): actionType {
    return {
        type: ADD_ONE_ANSWERED,
    }
}








