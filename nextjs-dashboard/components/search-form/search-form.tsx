'use client';
import { useState } from 'react';
import styles from './search-form.module.scss';
import { Form } from './form';

export function SearchForm() {
  const [activeTab, setActiveTab] = useState('return');
  const [isDirectFlight, setIsDirectFlight] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDirectFlightChange = (event) => {
    setIsDirectFlight(event.target.checked);
  };

  return (
    <div className={styles['search-form']}>
      <div className={styles['search-form__tabs-wrapper']}>
        <div className={styles['search-form__tabs-wrapper__container']}>
          <div className={styles['search-form__tabs-wrapper__container__tabs']}>
            <button
              className={`${styles['search-form__tabs-wrapper__container__tabs__tab']} ${activeTab === 'return' ? styles.active : ''}`}
              onClick={() => handleTabClick('return')}
            >
              Return
            </button>
            <button
              className={`${styles['search-form__tabs-wrapper__container__tabs__tab']} ${activeTab === 'oneway' ? styles.active : ''}`}
              onClick={() => handleTabClick('oneway')}
            >
              One way
            </button>
            <button
              className={`${styles['search-form__tabs-wrapper__container__tabs__tab']} ${activeTab === 'multicity' ? styles.active : ''}`}
              onClick={() => handleTabClick('multicity')}
            >
              Multi-city
            </button>
          </div>
          <div
            className={styles['search-form__tabs-wrapper__container__radio']}
          >
            <label>
              <input
                type="checkbox"
                checked={isDirectFlight}
                onChange={handleDirectFlightChange}
              />
              Direct Flight
            </label>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}
