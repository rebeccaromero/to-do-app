import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listsReducer from './reducer_lists';

const rootReducer = combineReducers({
  lists: listsReducer,
  form: formReducer,
  // cards: cardReducer
});

export default rootReducer;
