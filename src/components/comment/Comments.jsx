import { useSelector } from "react-redux";
import { Comment } from "./Comment";
// import styles from "./Comment.module.css";
export const Comments = ({  postId }) => {
  // console.log(value);

const comments = useSelector((state) => state.comment.comments).filter(
  (comment) => comment.post === postId
);
console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};
