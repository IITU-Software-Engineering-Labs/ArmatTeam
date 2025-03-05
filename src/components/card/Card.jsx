import { ArrowRight } from "lucide-react";
import { FancyBoarder } from "../fancy-boarder/FancyBoarder";
import styles from "./card.module.scss";

export const Card = ({
  variant = "primary",
  titleTop,
  titleBottom,
  img,
  url,
}) => {
  return (
    <a href={url} className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.left}>
        <div>
          <FancyBoarder variant={variant === "light" ? "primary" : "light"}>
            <h3>{titleTop}</h3>
          </FancyBoarder>
          <FancyBoarder variant={variant === "light" ? "primary" : "light"}>
            <h3>{titleBottom}</h3>
          </FancyBoarder>
        </div>
        <div className={styles.learn}>
          <div className={styles.icon}>
            <ArrowRight size={28} className={styles.arrow} />
          </div>
          <span>Learn more</span>
        </div>
      </div>
      <div className={styles.right}>
        {!!img && <img src={img} alt="Service" />}
      </div>
    </a>
  );
};
