import styles from './hero.module.scss';
import Image from 'next/image';
import { SearchForm } from '@/components/search-form/search-form';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  trustScoreText: string;
}


export function Hero({ backgroundImage, title, subtitle, trustScoreText }: HeroProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">


        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.iconContainer}>
          <Image
            className={styles.trustpilotIcon}
            priority
            src="/images/trustpilot.png"
            alt="Follow us on Twitter"
            width={214}
            height={40}
          />
        </div>
        <div className={styles.trustscore}>
          <span className="header__trustscore-score">{trustScoreText}</span>
        </div>

        <SearchForm />
      </div>
    </div>
  );
}
