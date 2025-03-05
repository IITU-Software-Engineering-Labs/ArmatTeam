import styles from "./team-card.module.scss";

export const TeamCard = ({ img, name, post, description }) => {
  return (
    <div className={styles.border}>
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="Photo" />
        <div className={styles.right}>
          <a href="#" className={styles.icon}>
            <img src="/img/in.svg" alt="LinkedIn" />
          </a>
          <div className={styles.info}>
            <h4>{name}</h4>
            <p>{post}</p>
          </div>
        </div>
      </div>
      <hr />
      <p>{description}</p>
    </div>
  );
};
