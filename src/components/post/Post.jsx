import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";
import styles from "./Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmarks,
  removeBookmarks,
} from "../../features/bookmarks/bookmark-slice";
import {
  deletePost,
  disLikePost,
  likePost,
} from "../../features/post/post-slice";
import { Comments } from "../comment/Comments";
export const Post = ({ post, bookmark = false }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    if (bookmark) dispatch(removeBookmarks(post._id));
    else dispatch(addToBookmarks(post._id));
  };

  const isLiked = post.likes.includes(user._id);

  const likeClikeHandler = () => {
    if (!isLiked) dispatch(likePost(post._id));
    else dispatch(disLikePost(post._id));
  };
  return (
    post && (
      <div className={styles.post}>
        <div className={styles.head}>
          <div className={styles.profile}>
            <Link to="/" className={styles.profileImg}>
              <img src={post?.user?.photo?.secure_url} alt="profile" />
            </Link>
            <div className={styles.profileHandle}>
              <h4>{post?.user?.name}</h4>
              <p className="text-gray">Agartala, 15 MINUTES AGO</p>
            </div>
          </div>
          {post.user._id === user._id && (
            <button
              className="transparent"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <MdDeleteOutline size={20} />
            </button>
          )}
        </div>
        {post?.image?.url && (
          <div className={styles.media}>
            <img src={post?.image?.url} alt="post" />
          </div>
        )}
        <div className={styles.description}>
          <p>{post?.description}</p>
          <p className={styles.tags}>
            {post?.tags?.map((tag) => (
              <span>{tag}</span>
            ))}
          </p>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.actionButtonRight}>
            <button className="transparent" onClick={likeClikeHandler}>
              <AiOutlineHeart size={20} color={isLiked ? "red" : "black"} />
            </button>
            <AiOutlineMessage size={20} />
            <AiOutlineShareAlt size={20} />
          </div>
          <button className="transparent" onClick={handleBookmarkClick}>
            <BiBookmark size={20} color={bookmark ? "#2563eb" : ""} />
          </button>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            name="comment"
            placeholder="Write a comment"
            className={styles.inputSearch}
          />
          <FiSend size={20} />
        </div>
        {/* <div className={styles.comment}>
          <Comments postId={post._id} />
        </div> */}
      </div>
    )
  );
};
