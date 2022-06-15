import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/posts/actions";

function Posts({ isLoading, posts, error, _getPosts }) {
  useEffect(() => {
    _getPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <div>...loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        posts.map((comment) => <p>{comment.title}</p>)
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.posts.loading,
    posts: store.posts.posts,
    error: store.posts.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _getPosts: () => dispatch(getPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
