import {
  SHOW_NAVBAR,
  HIDE_NAVBAR,
  TOGGLE_PROFILE,
} from '../actions/types';

const initalState = {
  isProfileOpen: false,
  isShown: true,
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_NAVBAR:
      return {
        ...state,
        isShown: true
      };
    case HIDE_NAVBAR:
      return {
        ...state,
        isShown: false
      };
    case TOGGLE_PROFILE:
      return {
        ...state,
        isProfileOpen: !state.isProfileOpen
      };
    default:
      return state;
  }
}
