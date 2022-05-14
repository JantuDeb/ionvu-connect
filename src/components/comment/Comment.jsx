import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/utils";
import styles from "./Comment.module.css";
export const Comment = ({ comment }) => {
  const user = useSelector((state) => state.auth.user);
  const allowModify = user._id === comment.user;
//   console.log(comment);
  return (
    <div className={styles.comment}>
      <div className={styles.profileImg}>
        <img src={comment.photoUrl} alt="profile" />
      </div>
      <div>
        <div className={styles.flex}>
          <p className="text-gray">{comment.userName}</p>
          <p>{formatDate(comment.createdAt)}</p>
        </div>
        <p>{comment.body}</p>
        <div className={styles.flex}>
          <p>Reply</p>
          {allowModify && (
            <>
              <p>Edit</p>
              <p>Delete</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
