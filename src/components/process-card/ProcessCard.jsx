import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./process-card.module.scss";

export const ProcessCard = ({ num, title, info }) => {
  const [isClosed, setIsClosed] = useState(true);

  const toggleCard = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <div className={`${styles.card} ${isClosed ? styles.closed : styles.opend}`}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>{num}</h1>
          <h3>{title}</h3>
        </div>

        <button onClick={toggleCard}>
          {isClosed ? <FaPlus /> : <FaMinus />}
        </button>
      </div>
      <div className={styles.info}>
        <div>
          <hr />
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};
