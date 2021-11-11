import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

import sidebar from './sidebar';
import navbar from './navbar';
import user from './user';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  user,
  sidebar,
  navbar
});
