import { combineReducers } from '@reduxjs/toolkit';
import { PersonSlice } from './PersonSlice';

export default combineReducers({
  person: PersonSlice,
});
