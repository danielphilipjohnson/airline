import styles from './hero.module.scss';

import {SearchForm} from "@/components/search-form/search-form";

export function Hero() {
	console.log(styles)
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Search and book flights to Australia</h1>
        <p className={styles.subtitle}>Buy your flights now and pay later</p>
        <div className={styles.trustscore}>
          <span className="header__trustscore-score">
            TrustScore 4.5 | 6,500 reviews
          </span>
        </div>
      </div>
      <SearchForm/>
  
    </div>
  );
}
