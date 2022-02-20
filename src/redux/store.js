import { createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";


const initialState = {

}
const middleware = [thunk]
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS__EXTENSION && 
        window.__REDUX_DEVTOOLS__EXTENSION__()
    )
)
export default store;