import React, { useEffect, useState } from "react";
import styles from "./SidebarRight.module.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFollowers,
  fetchFollowings,
  fetchPeoples,
  follow,
  unFollow,
} from "../../features/followers/followers-slice";

export const SidebarRight = () => {
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState("followers");

  useEffect(() => {
    dispatch(fetchFollowers());
    dispatch(fetchFollowings());
    dispatch(fetchPeoples());
  }, [dispatch]);

  const followers = useSelector((state) => state.follow.followers);
  const followings = useSelector((state) => state.follow.followings);
  const peoples = useSelector((state) => state.follow.peoples);
  const user = useSelector((state) => state.auth.user);

  const isFollowing = (followers) => followers.includes(user._id);

  const handleFollowUnfollow = (id, following) => {
    if (following) dispatch(unFollow(id));
    else dispatch(follow(id));
  };

  const currentPageData = currentPage === "followers" ? followers : followings;
  return (
    <aside className={styles.right}>
      <div className={styles.message}>
        <div className={styles.categories}>
          {["followers", "followings"].map((page) => {
            return (
              <h6
                className={`${styles.category} ${
                  currentPage === page ? styles.activeCategory : ""
                }`}
                onClick={() => setcurrentPage(page)}
              >
                {page}
              </h6>
            );
          })}
        </div>
        <div className={styles.peoples}>
          {currentPageData.map((user) => {
            const following = isFollowing(user.followers);
            return (
              <Link key={user._id} to="/" className={styles.people}>
                <div className={styles.profile}>
                  <div className={styles.profileImg}>
                    <img src={user?.photo?.secure_url} alt="profile" />
                  </div>
                  <div className={styles.profileHandle}>
                    <h4>{user?.name}</h4>
                    <p className="text-gray">@{user.username}</p>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={(e) =>{
                    e.preventDefault()
                    handleFollowUnfollow(user._id, following)
                  }}
                >
                  {following ? "Unfollow" : "Follow"}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
     
      <div className={styles.friendRequests}>
        <h4 className={styles.heading}>Discover People</h4>
        <div className={styles.searchBar}>
          <BiSearch size={20} />
          <input
            type="text"
            name=""
            placeholder="Search people"
            className={styles.inputSearch}
          />
        </div>
        <div className={styles.requests}>
          {peoples.map((user) => {
            const following = isFollowing(user.followers);
            return (
              <div key={user._id} className={styles.request}>
                <div className={styles.profile}>
                  <div className={styles.profileImg}>
                    <img src={user.photo.secure_url} alt="profile" />
                  </div>
                  <div className={styles.profileHandle}>
                    <h4>{user.name}</h4>
                    <p className="text-gray">@{user.username}</p>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleFollowUnfollow(user._id, following)}
                >
                  {following ? "Unfollow" : "Follow"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
