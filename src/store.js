import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addImage from './reducers/addImage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(addImage, composeEnhancer(applyMiddleware(thunk)));

export default store;