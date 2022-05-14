import styles from "./SignUp.module.css";
import { FaUser,FaUserLock } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

export const SignUp = () => {
  return (
    <form className={styles.signUp}>
      {/* <h2 className={styles.title}> Sign up</h2> */}
      <div className={styles.inputBox}>
        <IoMailOpenOutline />
        <input type="text" placeholder="Username" />
      </div>
      <div className={styles.inputBox}>
        <FaUser />
        <input type="text" placeholder="Name" />
      </div>
      <div className={styles.inputBox}>
        <FaUserLock />
        <input type="password" placeholder="Password" />
      </div>
      <button className="btn btn-primary">Sign up</button>
      <p className={styles.socialText}>Or Sign in with social platforms</p>
      <div className={styles.social}>
        <BsFacebook size={30} />
        <BsGoogle size={30} />
        <BsTwitter size={30} />
      </div>
    </form>
  );
};
