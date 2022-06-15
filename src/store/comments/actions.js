import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_FAILURE,
  COMMENTS_REQUEST_SUCCESS,
} from "./constants";
import axios from "axios";

export const commentsRequest = () => {
  return {
    type: COMMENTS_REQUEST,
  };
};
export const commentsRequestSuccess = (comments) => {
  return {
    type: COMMENTS_REQUEST_SUCCESS,
    payload: comments,
  };
};
export const commentsRequestFailure = (errorMessage) => {
  return {
    type: COMMENTS_REQUEST_FAILURE,
    payload: errorMessage,
  };
};
export const getComments = () => {
  return (dispatch) => {
    dispatch(commentsRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => dispatch(commentsRequestSuccess(response.data)))
      .catch((error) => dispatch(commentsRequestFailure(error.message)));
  };
};
