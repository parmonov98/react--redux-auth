import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
} from '../actions/types';

const initalState = {
  isExpanded: true,
  isShown: true,
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isShown: true
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        isShown: false
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isExpanded: !state.isExpanded
      };
    default:
      return state;
  }
}
