import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { CaseStudiesSection } from "../../sections/case-studies-section/CaseStudiesSection";
import { ContactUs } from "../../sections/contact-us-section/ContactUs";
import { HeroSection } from "../../sections/hero-section/HeroSection";
import { ServicesSection } from "../../sections/services-section/ServicesSection";
import { TeamSection } from "../../sections/team-section/TeamSection";
import { WorkingProcsessSection } from "../../sections/working-process-section/WorkingProcsessSection";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <WorkingProcsessSection />
        <TeamSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};
