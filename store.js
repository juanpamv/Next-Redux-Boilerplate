import { createStore } from 'redux';
import rootReducer from "./reducers/rootReducer";

const data = {
    users: [{
        name: "jp"
    }]
}

const store = createStore( rootReducer, data );

export default store;