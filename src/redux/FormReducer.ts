import { formApi } from "../api/api";
import { BaseThunkType, InferActionsTypes } from "./store";

const initialState = {
    isError: false
}
export const actions = {
    setError: (isError: boolean) => ({
        type: 'SET_ERROR',
        isError
    } as const)
}

const FormReducer = (state = initialState, action: ActionsType) => {
    switch(action.type) {
        case "SET_ERROR": {
            return {...state, error: action.isError}
        }
        default:
            return state;
        }
}

const sendForm = (advantages: Array<string>, nickname: string, name: string, surname: string, sex: string, checkbox: Array<string>,
    radio: string, about: string): ThunkType => {
        return (dispatch) => {
            let res = formApi.sendForm(advantages, nickname, name, surname, sex, checkbox, radio, about)
        }
    }
        
export { FormReducer, sendForm}
    
    
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions> 
type ThunkType = BaseThunkType<ActionsType>