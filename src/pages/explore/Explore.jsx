import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components/post/Post";
import { fetchAllPosts, selectPost } from "../../features/post/post-slice";
import styles from "./Explore.module.css";

export const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const posts = useSelector(selectPost);
  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};
