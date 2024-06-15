import Image from 'next/image';
import styles from './navbar.module.scss';

function Navigation() {
  const navItems = ['Book Flights', 'Information', 'Help', 'Travel Agents'];
  return (
    <nav className={styles.nav} aria-label="Main Navigation">
      <div className={styles.nav__left}>
        <Image
          className={styles.nav__logo}
          src="/images/logos/alternative-airlines.jpg"
          alt="Company Logo"
          width={260}
          height={80}
        />
        <ul className={styles['nav__left-list']}>
          {navItems.map((item, index) => (
            <li className={styles['nav__left-list-item']} key={index}>
              <span>{item}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.nav__right}>
        <ul className={styles['nav__right-list']}>
          <li className={styles['nav__right-list-item']}>Manage booking</li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={styles['nav__menu-icon']}
        aria-label="Menu"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </nav>
  );
}

export default Navigation;
