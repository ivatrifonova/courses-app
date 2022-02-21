import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { courseReducer } from './courses/reducers';

const rootReducer = combineReducers({
	courseReducer,
});
const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancers);

export default store;
