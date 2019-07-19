import { createStore } from "redux";

const initState = {
    todos: [],
    posts: []
};

let myreducer = (state = initState, action) => {
    if (action.type == "ADD_TODO") {
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
    }

    if (action.type == "ADD_POST") {
        return {
            ...state,
            posts: [...state.posts, action.payload]
        }
    }
};

const store = createStore(myreducer);

store.subscribe(() => {
    console.log("state updated");
    console.log(store.getState());
});

store.dispatch({ type: "ADD_TODO", payload: "buy milk" });
store.dispatch({ type: "ADD_TODO", payload: "sleep some more" });
store.dispatch({ type: "ADD_POST", payload: "Egg hunt with Yoshi" });

