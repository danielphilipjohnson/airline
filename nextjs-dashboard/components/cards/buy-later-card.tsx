import styles from './buy-later-card.module.scss';
import Image from 'next/image';
import CheckIcon from '@/components/icons/check-icon';

interface CardProps {
  heading: string;
  text: string;
}

export default function BuyLaterCard({ heading, text }: Readonly<CardProps>) {
  return (
    <div className={`{styles.container} container`}>
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.checkIcon}>
                <CheckIcon />
              </div>
              <span>Make payments weekly or monthly</span>
            </li>
            <li className={styles.listItem}>
              <div className={styles.checkIcon}>
                <CheckIcon />
              </div>
              <span>Interest free options</span>
            </li>
            <li className={styles.listItem}>
              <div className={styles.checkIcon}>
                <CheckIcon />
              </div>
              <span>Fast approval</span>
            </li>
          </ul>

          <div className={styles.image_grid}>
            <div>
              <Image
                className={`${styles.cards_icon} ${styles.klarna_icon}`}
                src="/images/logos/klarna.png"
                alt="klarna"
                width={54}
                height={54}
                loading="lazy"
              />
            </div>

            <div>
              <Image
                className={`${styles.cards_icon} ${styles.laybuy_icon}`}
                src="/images/logos/laybuy.png"
                alt="laybuy"
                width={50}
                height={50}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className={`${styles.cards_icon} ${styles.affirm_icon}`}
                
                src="/images/logos/affirm.png"
                alt="affirm"
                width={50}
                height={50}
                loading="lazy"
              />
            </div>

            <div>
              <Image
                className={`${styles.cards_icon} ${styles.afterpay_icon}`}
                
                src="/images/logos/afterpay.png"
                alt="afterpay"
                width={54}
                height={54}
                loading="lazy"
              />
            </div>
          </div>

          <button className={styles.button}>Browse payment methods</button>
        </div>

        <div className={styles.imageContainer}>
          <div>
            <Image
              className={`${styles.cards_icon} ${styles.klarna_icon}`}
              
              src="/images/logos/klarna.png"
              alt="klarna"
              width={54}
              height={54}
              loading="lazy"
            />
          </div>

          <div>
            <Image
              className={`${styles.cards_icon} ${styles.laybuy_icon}`}
              
              src="/images/logos/laybuy.png"
              alt="laybuy"
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
          <div>
            <Image
              className={`${styles.cards_icon} ${styles.affirm_icon}`}
              src="/images/logos/affirm.png"
              alt="affirm"
              width={50}
              height={50}
              loading="lazy"
            />
          </div>

          <div>
            <Image
              className={`${styles.cards_icon} ${styles.afterpay_icon}`}
              
              src="/images/logos/afterpay.png"
              alt="afterpay"
              width={54}
              height={54}
              loading="lazy"
            />
          </div>

          <div>
            <Image
              className={styles.paylater}
              src="/images/bnpl-mobile.png"
              alt="Follow us on Twitter"
              width={589}
              height={1200}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
