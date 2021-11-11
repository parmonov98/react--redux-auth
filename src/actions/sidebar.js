import axios from 'axios';
import { setAlert } from './alert';
import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
  SET_ACTIVE_MENU_ITEM
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

export const setActiveItem = (route) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_MENU_ITEM,
    payload: route
  });
};
