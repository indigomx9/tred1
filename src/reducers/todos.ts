import { 
    Todo, FetchTodosAction 
} from "../actions/ActionCreators";
import { ActionTypes } from "../actions/Types"

export const todosReducer = (
    state: Todo[] = [], 
    action: FetchTodosAction
) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default: 
            return state;
    }
};

