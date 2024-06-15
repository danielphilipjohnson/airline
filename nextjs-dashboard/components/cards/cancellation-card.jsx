import styles from './cancellation-card.module.scss';
import Image from 'next/image';
import BreakdownIcon from '@/components/icons/breakdown-icon';
import WeatherIcon from '@/components/icons/weather-icon';
import RefundableIcon from '@/components/icons/refundable-icon';
import EmergencyIcon from '@/components/icons/emergency-icon';
import IllnessIcon from '@/components/icons/illness-icon';
import MoreIcon from '@/components/icons/more-icon';

export default function CancellationCard({ heading, text }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardLeft}>
          <span className={styles.recommendationBadge}>Recommended</span>
          <div>
            <Image
              className={styles.mobilePhone}
              src="/images/cp-mobile.png"
              width={589}
              height={1200}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.cardRight}>
          <h2 className={styles.cardHeading}>{heading}</h2>
          <p className={styles.cardText}>{text}</p>
          <ul className={styles.featureList}>
            <li className={`${styles.featureItem} ${styles.illnessFeature}`}>
              <IllnessIcon />
              <span>Illness</span>
            </li>
            <li className={styles.featureItem}>
              <WeatherIcon />
              <span>Weather</span>
            </li>
            <li className={`${styles.featureItem} ${styles.refundableFeature}`}>
              <RefundableIcon />
              <span>Refundable Booking</span>
            </li>
            <li className={`${styles.featureItem} ${styles.emergencyFeature}`}>
              <EmergencyIcon />
              <span>Emergency</span>
            </li>
            <li className={`${styles.featureItem} ${styles.mechanicalFeature}`}>
              <BreakdownIcon />
              <span>Mechanical Breakdown</span>
            </li>
            <li className={`${styles.featureItem} ${styles.moreFeatures}`}>
              <MoreIcon />
              <span>Plus much much more</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
