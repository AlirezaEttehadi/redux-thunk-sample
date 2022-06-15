import {
  POSTS_REQUEST,
  POSTS_REQUEST_FAILURE,
  POSTS_REQUEST_SUCCESS,
} from "./constants";
import axios from "axios";

export const postsRequest = () => {
  return {
    type: POSTS_REQUEST,
  };
};
export const postsRequestSuccess = (posts) => {
  return {
    type: POSTS_REQUEST_SUCCESS,
    payload: posts,
  };
};
export const postsRequestFailure = (errorMessage) => {
  return {
    type: POSTS_REQUEST_FAILURE,
    payload: errorMessage,
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch(postsRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => dispatch(postsRequestSuccess(response.data)))
      .catch((error) => dispatch(postsRequestFailure(error.message)));
  };
};
