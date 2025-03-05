import styles from "./working-process-section.module.scss";
import { Container } from "../../components/container/Container";
import { FancyBoarder } from "../../components/fancy-boarder/FancyBoarder";
import { ProcessCard } from "../../components/process-card/ProcessCard";

const processCards = [
  {
    id: 1,
    isClosed: false,
    num: "01",
    title: "Consultation",
    info: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    num: "02",
    title: "Research and Strategy Development",
    info: "Based on our research, we develop a comprehensive strategy that outlines the steps needed to achieve your goals. We focus on creating a plan that is realistic and achievable.",
  },
  {
    id: 3,
    num: "03",
    title: "Implementation",
    info: "We put the strategy into action by implementing the necessary changes and optimizations. Our team works collaboratively to ensure that the plan is executed effectively.",
  },
  {
    id: 4,
    num: "04",
    title: "Monitoring & Reporting",
    info: "We continuously monitor the performance of the strategy and provide regular reports to keep you informed. This helps us make data-driven decisions to improve results.",
  },
  {
    id: 5,
    num: "05",
    title: "Optimization",
    info: "Based on the data collected, we make necessary adjustments to optimize the strategy and improve results. Our goal is to help you achieve the best possible outcomes.",
  },
  {
    id: 6,
    num: "06",
    title: "Review & Feedback",
    info: "We review the results of the strategy and gather feedback from you to ensure that your goals are being met. This allows us to make further improvements and adjustments as needed.",
  },
];

export const WorkingProcsessSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.top}>
            <FancyBoarder>
              <h2>Our Working Process</h2>
            </FancyBoarder>
            <p>Step-by-Step Guide to Achieving Your Business Goals</p>
          </div>
          {processCards.map((card) => (
            <ProcessCard
              key={card.id}
              num={card.num}
              title={card.title}
              info={card.info}
              isClosed={card.isClosed}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
