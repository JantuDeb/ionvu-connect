import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Post } from "../../components/post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../features/post/post-slice";
import { Modal } from "../../components/shared/Modal";
import { EditProfileForm } from "../../components/forms/EditProfileForm";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.post.posts);
  const userPosts = posts?.filter((post) => post?.user?._id === user?._id);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchAllPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);



  return (
    <>
      <div className={styles.profile}>
        <div className={styles.header}>
          <div className={styles.banner}>
            <img src={user?.banner?.secure_url} alt="profile banner " />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.profileImg}>
              <img src={user?.photo?.secure_url} alt="profile" />
            </div>
            <div className={styles.editProfile}>
              <button
                className="btn btn-seconady"
                onClick={() => setShowModal(true)}
              >
                Edit Profile
              </button>
            </div>
            <div className={styles.profileHandle}>
              <h4>{user?.name}</h4>
              <p className="text-gray">@{user.username}</p>
            </div>
            <p>{user?.bio}</p>

            <div className={styles.location}>
              <span>
                <HiOutlineLocationMarker size={20} />
               {user.location}
              </span>
              <span>
                <BsLink45Deg size={20} />
                <a
                  href={user?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user?.website}
                </a>
              </span>
            </div>

            <div className={styles.follow}>
              <Link to="/followers">
                {user?.followers?.length}{" "}
                <span className="text-gray">Followers</span>
              </Link>
              <Link to="/following">
                {user?.followings?.length}{" "}
                <span className="text-gray">Following</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.posts}>
          {userPosts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      </div>

      {showModal && (
        <Modal>
          <EditProfileForm user={user} setShowModal={setShowModal}  />
        </Modal>
      )}
    </>
  );
};
