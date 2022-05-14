import React from "react";
import styles from "./Comment.module.css";
export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.profileImg}>
        <img src={comment.photoUrl} alt="profile" />
      </div>
      <div>
        <div className={styles.commentRight}>
          <p className="text-gray">{comment.userName}</p>
          <p>Today 5 pm</p>
        </div>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};
