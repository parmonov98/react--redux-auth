import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_CURRENT_USER,
  GET_USER,
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USER_ERROR,
  AUTH_ERROR
} from './types';

export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/auth/user`);
    dispatch({
      type: GET_CURRENT_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  // try {
  //   const res = await axios.get(`/api/posts/${id}`);
  //   dispatch({
  //     type: GET_POST,
  //     payload: res.data,
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

export const getUsers = () => async (dispatch) => {
  console.log('getting users');
  try {
    const res = await axios.get('/api/users');
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: USER_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const addLike = (id) => async (dispatch) => {
  // try {
  //   const res = await axios.put(`/api/posts/like/${id}`);
  //   dispatch({
  //     type: UPDATE_LIKES,
  //     payload: { id, likes: res.data },
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

export const removeLike = (id) => async (dispatch) => {
  // try {
  //   const res = await axios.put(`/api/posts/unlike/${id}`);
  //   dispatch({
  //     type: UPDATE_LIKES,
  //     payload: { id, likes: res.data },
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

export const addUser = (formData) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  // try {
  //   const res = await axios.post('/api/posts/', formData, config);
  //   dispatch({
  //     type: ADD_POST,
  //     payload: res.data,
  //   });

  //   dispatch(setAlert('Post Created', 'success'));
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

export const deleteUser = (id) => async (dispatch) => {
  // try {
  //   await axios.delete(`/api/posts/${id}`);
  //   dispatch({
  //     type: DELETE_POST,
  //     payload: id,
  //   });

  //   dispatch(setAlert('Post Removed', 'success'));
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

export const addComment = (postId, formData) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };
  // try {
  //   const res = await axios.post(
  //     `/api/posts/comment/${postId}`,
  //     formData,
  //     config
  //   );
  //   dispatch({
  //     type: ADD_COMMENT,
  //     payload: res.data,
  //   });
  //   dispatch(setAlert('Comment Added', 'success'));
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  // try {
  //   await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
  //   dispatch({
  //     type: REMOVE_COMMENT,
  //     payload: commentId,
  //   });
  //   dispatch(setAlert('Comment Removed', 'success'));
  // } catch (err) {
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};
