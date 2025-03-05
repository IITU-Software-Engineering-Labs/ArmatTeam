import styles from "./button.module.scss";

export const Button = ({variant = "dark", children }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>{children}</button>
  );
};
