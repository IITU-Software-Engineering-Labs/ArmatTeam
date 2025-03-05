import { Button } from "../button/Button";
import { Container } from "../container/Container";
import { Logo } from "../logo/Logo";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <nav className={styles.nav}>
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Use Cases</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
            <Button variant="light">Request a quote</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};
