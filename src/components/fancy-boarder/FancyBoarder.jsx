import styles from "./fancy-boarder.module.scss";

export const FancyBoarder = ({ variant = "primary", children}) => {
  return <div className={`${styles.fancyBoarder} ${styles[variant]}`}>{children}</div>;
};
