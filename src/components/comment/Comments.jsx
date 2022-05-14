import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../features/comment/comment-slice";
import { Comment } from "./Comment";
import styles from "./Comment.module.css";
export const Comments = ({ postId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  const comments = useSelector((state) => state.comment.comments).filter(comment=>comment.post===postId);
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => <Comment comment={comment}/>)}
    </div>
  );
};
