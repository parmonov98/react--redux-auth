import axios from 'axios';
import { setAlert } from './alert';
import {
  SHOW_NAVBAR,
  HIDE_NAVBAR,
  TOGGLE_PROFILE
} from './types';

export const showNavbar = () => (dispatch) => {
  dispatch({
    type: SHOW_NAVBAR,
  });
};

export const hideNavbar = () => (dispatch) => {
  dispatch({
    type: HIDE_NAVBAR,
  });
};

export const toggleProfile = () => (dispatch) => {
  dispatch({
    type: TOGGLE_PROFILE,
  });
};
