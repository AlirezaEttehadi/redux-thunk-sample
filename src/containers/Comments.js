import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComments } from "../store/comments/actions";

function Comments({ isLoading, comments, error, _getComments }) {
  useEffect(() => {
    _getComments();
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      {isLoading ? (
        <div>...loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        comments.map((comment) => <p>{comment.name}</p>)
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.comments.loading,
    comments: store.comments.comments,
    error: store.comments.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _getComments: () => dispatch(getComments()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
