import { Button } from "../button/Button";
import { Container } from "../container/Container";
import { FancyBoarder } from "../fancy-boarder/FancyBoarder";
import { Input } from "../input/Input";
import { Logo } from "../logo/Logo";
import { Socials } from "../socials/Socials";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.top}>
            <Logo isLight={false} />
            <nav>
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Use Cases</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
            </nav>
            <Socials />
          </div>
          <div className={styles.body}>
            <div className={styles.left}>
              <FancyBoarder>
                <h4>Contact us:</h4>
              </FancyBoarder>
              <span className={styles.info}>
                <p>
                  Email:
                  <a href="mailto:izengaliev@gmail.com"> info@example.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+77023723003">+7-777-77-77</a>
                </p>
                <p>Address: Kazakhstan, Almaty, IITU University</p>
              </span>
            </div>
            <div className={styles.right}>
              <Input variant="transparent" placeholder="Email" />
              <Button variant="primary">Subscribe to news</Button>
            </div>
          </div>
          <hr />
          <div className={styles.bottom}>
            <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
