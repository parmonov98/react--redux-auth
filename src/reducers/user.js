import {
  GET_USER,
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USER_ERROR,
  GET_CURRENT_USER
} from '../actions/types';

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        users: [payload, ...state.posts],
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // case UPDATE_LIKES:
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) =>
    //       post._id === payload.id ? { ...post, likes: payload.likes } : post
    //     ),
    //     loading: false,
    //   };
    // case ADD_COMMENT:
    //   return {
    //     ...state,
    //     post: { ...state.post, comments: payload },
    //     loading: false,
    //   };
    // case REMOVE_COMMENT:
    //   return {
    //     ...state,
    //     post: {
    //       ...state.post,
    //       comments: state.post.comments.filter(
    //         (comment) => comment._id !== payload
    //       ),
    //     },
    //     loading: false,
    //   };
    default:
      return state;
  }
}
