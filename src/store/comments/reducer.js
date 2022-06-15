import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_FAILURE,
  COMMENTS_REQUEST_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: "",
      };
    case COMMENTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
