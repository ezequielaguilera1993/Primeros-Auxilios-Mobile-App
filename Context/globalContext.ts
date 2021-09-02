import React, { createContext } from "react";


//interfaz de las actions
export interface iLanguageAction {
    type: "CHANGE_LANGUAGE"
    // payload: "español" | "english"
}

//interfaz del state
export interface iLanguageState {
    inSpanish: boolean
}

//state inicial
export const languageInitialState: iLanguageState = {
    inSpanish: true
}

//reducer
export const languageReducer = (state: iLanguageState, action: iLanguageAction) => {

    let type = action.type
    // let payload = action.payload //lo pongo para que quede de plantilla, pero es un switch no es necesario!

    if (type === "CHANGE_LANGUAGE") {
        //     return { ...state, language: payload } //Lo mismo con el destructuring
        return { inSpanish: !state.inSpanish }
    }

    return state
}


//creacion de contexto (sería como el store?)
export interface iLanguageContextProps {
    languageState: iLanguageState
    languageDispatch: React.Dispatch<iLanguageAction>
}
export const LanguageContext = createContext<iLanguageContextProps>({
    languageState: languageInitialState,
    languageDispatch: () => { }
})

export const LanguageContextConsumer = LanguageContext.Consumer
export const LanguageContextProvider = LanguageContext.Provider
export default LanguageContext