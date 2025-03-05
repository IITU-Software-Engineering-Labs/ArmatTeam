import styles from "./partners.module.scss";

export const Partners = () => {
  return (
    <div className={styles.partners}>
      <img src="/img/amazon.svg" alt="Amazon" />
      <img src="/img/dribbble.svg" alt="Dribbble" />
      <img src="/img/hubspot.svg" alt="HubSpot" />
      <img src="/img/notion.svg" alt="Notion" />
      <img src="/img/netflix.svg" alt="Netflix" />
      <img src="/img/zoom.svg" alt="Zoom" />
    </div>
  );
};
