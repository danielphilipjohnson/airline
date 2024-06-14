'use client';
import { useState } from 'react';
import styles from './search-form.module.scss';
import { Form } from './form';

export function SearchForm() {
  const [isActive, setIsActive] = useState(true);

  // buttons will render different content based on the active state
  // one way only updates
  // multi city adds different form
  return (
    <div className={styles.searchForm}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${isActive ? styles.active : ''}`}>
          Return
        </button>
        <button className={styles.tab}>One way</button>
        <button className={styles.tab}>Multi-city</button>
      </div>

      <Form />
     
    </div>
  );
}
