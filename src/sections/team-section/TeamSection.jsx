import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { FancyBoarder } from "../../components/fancy-boarder/FancyBoarder";
import { TeamCard } from "../../components/team-card/TeamCard";
import styles from "./team-section.module.scss";

const teamCards = [
  {
    id: 1,
    img: "/img/Ian.svg",
    name: "John Smith",
    post: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 2,
    img: "/img/Jane.png",
    name: "Jane Doe",
    post: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 3,
    img: "/img/Michael.png",
    name: "Michael Brown",
    post: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 4,
    img: "/img/Emily.png",
    name: "Emily Johnson",
    post: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: 5,
    img: "/img/Brian.png",
    name: "Brian Williams",
    post: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 6,
    img: "/img/Sarah.png",
    name: "Sarah Kim",
    post: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <Container>
        <div className={styles.teamContent}>
          <div className={styles.top}>
            <FancyBoarder>
              <h2>Team</h2>
            </FancyBoarder>
            <p>
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>
          <div className={styles.main}>
            {teamCards.map((teamCard) => (
              <TeamCard key={teamCard.id} {...teamCard} />
            ))}
          </div>
          <Button className={styles.button}>See all team</Button>
        </div>
      </Container>
    </section>
  );
};
