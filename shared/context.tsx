import type { ReactNode } from 'react'

import { createContext, useContext, useReducer } from "react";

export type Action = 'INCREMENT' | "DECREMENT"
export type State = typeof defaultState
export type Dispatch = (action: Action) => void

const defaultState = { count: 0 }
let a: any;
const CounterContext = createContext(a)

function counterReducer(state: State, action: Action) {

    if (action === "INCREMENT") {
        return { count: state.count + 1 }
    }

    else if (action === "DECREMENT") {
        return { count: state.count - 1 }
    }

}

export function CounterProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(counterReducer, defaultState)

    return <CounterContext.Provider value={{ state, dispatch }}>
    </CounterContext.Provider>
}

export function useCounter() {
    const context = useContext(CounterContext)

    if (!context) throw new Error("useCounter most be used inside a counterProvider");

    return context

}