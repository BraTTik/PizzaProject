import React, { createContext, useReducer, useContext} from 'react';
import * as actions from './AppStateActions';

const AppState = {
    currency: 'EURO',
    order: {},
}

const AppStateContext = createContext({});


const AppStateReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case actions.CHANGE_CURRENCY: 
            return { ...state, currency: action.payload.toUpperCase()}
        case actions.MAKE_ORDER:
            const id = Date.now();
            const result = {...state, order: {id, ...action.payload}}
            console.log(result);
            return { ...result}
        default:
            return state;
    }

}

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppStateReducer, AppState);
    return (
        <AppStateContext.Provider value={ {state, dispatch} }>
            { children }
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext);
}