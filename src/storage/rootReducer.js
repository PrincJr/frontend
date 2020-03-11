import {combineReducers} from 'redux';


import general from './modules/general/reducers'

const reducers = combineReducers({
    general,
  });
  
  export default reducers;
