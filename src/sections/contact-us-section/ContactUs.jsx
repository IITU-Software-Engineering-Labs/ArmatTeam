import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { FancyBoarder } from "../../components/fancy-boarder/FancyBoarder";
import { Input } from "../../components/input/Input";
import styles from "./contact-us-section.module.scss";

export const ContactUs = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.top}>
            <FancyBoarder>
              <h2>Contact Us</h2>
            </FancyBoarder>
            <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <div className={styles.checkboxes}>
                <div>
                  <input type="checkbox" /> <p>Say hi</p>
                </div>
                <div>
                  <input type="checkbox" /> <p>Get a Quote</p>
                </div>
              </div>

              <div className={styles.inputs}>
                <div>
                  <p>Name</p>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <p>Email*</p>
                  <Input placeholder="Email" />
                </div>
                <div>
                  <p>Message*</p>
                  <Input
                    isTextarea="true"
                    className={styles.massage}
                    placeholder="Message"
                  />
                </div>
              </div>

              <Button>Send Message</Button>
            </div>
            <img
              className={styles.right}
              src="/img/ContactUsImg.svg"
              alt="ContactUsImg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
