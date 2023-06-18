import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
    compose,
    Action,
} from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { FormReducer } from './FormReducer';

const reducers = combineReducers({
    formPage: FormReducer,
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;
export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppStateType, unknown, A>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never;
const composeEnhancers = compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;