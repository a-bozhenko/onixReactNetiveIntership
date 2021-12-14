import { combineReducers } from 'redux';
import { reducer as TranslateReducer } from './translate/reducers';

export default combineReducers({
  locale: TranslateReducer
});
