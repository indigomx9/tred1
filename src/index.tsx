import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById("root"))
});

