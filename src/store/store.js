import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import mainReducer from "./mainReducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
