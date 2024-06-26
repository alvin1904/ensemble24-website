import Section from "@/components/Section";
import Text from "./Text";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <Section id="about" className={styles.about} tag="About">
      <div className={styles.about_container}>
        <div className={styles.logos}>
          <Text heading="ABOUT CSE DEPT." className="shift">
            Nestled within the serene campus of RIT, our department boasts a
            vibrant community of talented students and alumni, supported by
            experienced and friendly faculty, making it one of the best
            departments in the college. Partnering closely with key industries
            and academia, we continuously strive to create more intelligent
            technology solutions. We're also thrilled to celebrate our
            department's 25th anniversary, marking a quarter-century of
            excellence.
          </Text>
          <Image
            src="/25yrs.png"
            height={163}
            width={180}
            alt="25th year anniversary. CSE RIT."
            draggable={false}
          />
        </div>
        <div className={styles.logos}>
          <Image
            src="/ensemble-white.webp"
            height={172}
            width={180}
            alt="Ensemble '24 Logo"
            draggable={false}
          />
          <Text heading="ABOUT ENSEMBLE '24" className="shift">
            Ensemble is more than just a department fest. Through a diverse
            range of events, workshops, and performances, Ensemble '24
            celebrates the creativity, passion, and dedication of our department
            members. Come, celebrate, learn, connect, and be inspired as we
            gather with like-minded individuals to create unforgettable
            memories. Welcome one and all to Ensemble 24 - Where Technology
            Meets Celebration!
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default About;
