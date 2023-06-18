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

const sendForm = (Advantages: Array<string>, Nickname: string, Name: string, Surname: string, Sex: string, Checkbox: Array<string>,
    Radio: string, About: string): ThunkType => {
        return (dispatch) => {
            let res = formApi.sendForm(Advantages, Nickname, Name, Surname, Sex, Checkbox, Radio, About);
            // if (res.resultCode)
        }
    }
        
export { FormReducer, sendForm}
    
    
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions> 
type ThunkType = BaseThunkType<ActionsType>