import {
  POSTS_REQUEST,
  POSTS_REQUEST_FAILURE,
  POSTS_REQUEST_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case POSTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
