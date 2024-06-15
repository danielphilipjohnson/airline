import styles from './card.module.scss';

interface CardProps {
  icon: React.ReactNode;  // Assuming icon is a React element
  heading: string;
  text: string;
}


export default function Card({ icon, heading, text }:Readonly<CardProps>) {
  return (
    <div className={styles.wrapper}>
     <div className={styles.icon}>{icon}</div>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
