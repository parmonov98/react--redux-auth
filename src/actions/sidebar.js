import axios from 'axios';
import { setAlert } from './alert';
import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
} from './types';


export const toggleSideBar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  });
};

export const hideSidebar = () => (dispatch) => {
  dispatch({
    type: HIDE_SIDEBAR,
  });
};

export const showSideBar = () => (dispatch) => {
  dispatch({
    type: SHOW_SIDEBAR,
  });
};
