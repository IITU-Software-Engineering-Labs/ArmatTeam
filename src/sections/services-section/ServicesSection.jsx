import { Card } from "../../components/card/Card";
import { Container } from "../../components/container/Container";
import { FancyBoarder } from "../../components/fancy-boarder/FancyBoarder";
import { Button } from "../../components/button/Button";
import styles from "./services-section.module.scss";

const services = [
  {
    id: 1,
    variant: "light",
    titleTop: "Search engine",
    titleBottom: "optimization",
    img: "/img/service1.svg",
    url: "#",
  },
  {
    id: 2,
    variant: "primary",
    titleTop: "Pay-per-click",
    titleBottom: "advertising",
    img: "/img/service2.svg",
    url: "#",
  },
  {
    id: 3,
    variant: "dark",
    titleTop: "Social Media",
    titleBottom: "Marketing",
    img: "/img/service3.svg",
    url: "#",
  },
  {
    id: 4,
    variant: "light",
    titleTop: "Email",
    titleBottom: "Marketing",
    img: "/img/service4.svg",
    url: "#",
  },
  {
    id: 5,
    variant: "primary",
    titleTop: "Content",
    titleBottom: "Creation",
    img: "/img/service5.svg",
    url: "#",
  },
  {
    id: 6,
    variant: "dark",
    titleTop: "Analytics and",
    titleBottom: "Tracking",
    img: "/img/service6.svg",
    url: "#",
  },
];

export const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.top}>
          <FancyBoarder>
            <h2>Services</h2>
          </FancyBoarder>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className={styles.cards}>
          {services.map((service) => (
            <Card key={service.id} {...service} />
          ))}
        </div>
        <div className={styles.bottom}>
          <div>
            <h3>Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button>Get your free proposal</Button>
          </div>
          <img src="/img/serviceSectionImg.svg" alt="ServiceSectionImg" />
        </div>
      </Container>
    </section>
  );
};
