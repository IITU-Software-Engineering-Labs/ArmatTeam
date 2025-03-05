import styles from "./socials.module.scss";

export const Socials = () => {
  return (
    <div className={styles.socials}>
      <a href="#">
        <img src="/img/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="#">
        <img src="/img/facebook.svg" alt="Facebook" />
      </a>
      <a href="">
        <img src="/img/twitterx.svg" alt="TwitterX" />
      </a>
    </div>
  );
};
