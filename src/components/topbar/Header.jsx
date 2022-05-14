import React from "react";
import styles from "./Header.module.css";
import { FcSearch } from "react-icons/fc";
import { IoNotificationsCircle } from "react-icons/io5";
import { BsPersonFill, BsChatTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <span className={styles.logo}>Social</span>
      </div>
      {/* HEADRE MIDDLE */}
      <div className={styles.middle}>
        <div className={styles.search}>
          <FcSearch size={20} />
          <input
            type="text"
            name="search"
            placeholder="Search for a friend or post"
            className={styles.inputSearch}
          />
        </div>
      </div>
      <div className={styles.right}>
        {/* HEADERS LINKS */}
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/" className={styles.link}>
            Explore
          </Link>
        </div>

        {/* HEADRE ICONS */}
        <div className={styles.icons}>
          <div className={styles.iconItem}>
            <BsPersonFill size={20} />
            <span className={styles.iconBadge}>1</span>
          </div>
          <div className={styles.iconItem}>
            <BsChatTextFill size={20} />
            <span className={styles.iconBadge}>2</span>
          </div>
          <div className={styles.iconItem}>
            <IoNotificationsCircle size={20} />
            <span className={styles.iconBadge}>3</span>
          </div>
        </div>

        <img src="assets/img-1.jpg" alt="profile" className={styles.profileImg} />
      </div>
    </header>
  );
};
