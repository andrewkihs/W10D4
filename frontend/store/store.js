import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer'

// const configureStore = function(preloadedState = {}) {
//     return createStore(rootReducer, preloadedState);
// }
const configureStore = function() {
    return createStore(rootReducer);
}

export default configureStore