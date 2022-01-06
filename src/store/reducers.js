import { combineReducers } from 'redux';
import { reducer as TranslateReducer } from './translate/reducers';
import { reducer as GlobalsReducer } from './globals/reducers';

export default combineReducers({
  locale: TranslateReducer,
  globals: GlobalsReducer
});
