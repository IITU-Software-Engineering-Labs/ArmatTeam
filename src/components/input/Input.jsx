import styles from "./input.module.scss";

export const Input = ({
  variant = "white",
  className = "",
  isTextarea = false,
  ...props
}) => {
  const Component = isTextarea ? "textarea" : "input";
  return (
    <Component
      className={`${styles.input} ${styles[variant]} ${className}`}
      {...props}
    />
  );
};
