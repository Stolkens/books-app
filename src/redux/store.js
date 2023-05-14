import { legacy_createStore as createStore} from 'redux';
import { combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from './booksRedux';
import initialState from './initialState';
import thunk from 'redux-thunk';


const subreducers = {
  books: booksReducer,
};


const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
);

export default store;

