import Section from "@/components/Section";
import Text from "./Text";
import styles from "./about.module.css";
import cn from "@/lib/cn";
import Image from "next/image";

const About = () => {
  return (
    <Section id="about" className={styles.about} tag="About">
      <div className={styles.logos}>
        <Text heading="ABOUT CSE DEPT." className="shift">
          Nestled within the serene campus of RIT, our department boasts a
          vibrant community of talented students and alumni, supported by
          experienced and friendly faculty, making it one of the best
          departments in the college. Collaborating actively with leading
          industries and academia, we have always strived to address global
          challenges and develop smarter technology solutions.
        </Text>
        <Image
          src="/25yrs.png"
          height={272}
          width={300}
          alt="25th year anniversary. CSE RIT."
        />
      </div>
      <div className={styles.logos}>
        <Image
          src="/ensemble-blue.webp"
          height={272}
          width={235}
          alt="Ensemble '24 Logo"
        />
        <Text heading="ABOUT ENSEMBLE '24" className="shift">
          Ensemble is more than just a department fest. Through a diverse range
          of events, workshops, and performances, Ensemble '24 celebrates the
          creativity, passion, and dedication of our department members. Come,
          celebrate, learn, connect, and be inspired as we gather with
          like-minded individuals to create unforgettable memories. Welcome one
          and all to Ensemble 24 - Where Technology Meets Celebration!
        </Text>
      </div>
    </Section>
  );
};

export default About;
