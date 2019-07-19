import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions/ActionCreators";

export interface StoreState {
    todos: Todo[];
};

export const rootReducer = combineReducers<StoreState>({
    todos: todosReducer
});

