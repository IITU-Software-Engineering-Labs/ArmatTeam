import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Partners } from "../../components/partners/Partners";
import styles from "./hero-section.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionContent}>
          <div className={styles.left}>
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button>Book a consultation</Button>
          </div>
          <img src="/img/heroSectionImg.svg" alt="HeroSectionImg" />
        </div>
        <Partners/>
      </Container>
    </section>
  );
};
