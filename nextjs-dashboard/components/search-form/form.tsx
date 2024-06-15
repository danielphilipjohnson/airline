import styles from './form.module.scss';

export function Form() {
  return (
    <div className={styles.form__body}>
      <div className={styles.form__row}>
        <div
          className={`${styles.form__body__group} ${styles['form__body__group--left']}`}
        >
          <label className={styles.form__body__group__label} htmlFor="input">
            Where from?
          </label>
          <div className={styles.form__body__group__input}>London (LON)</div>
        </div>
        <div className={styles['swap-icon__container']}>
          <svg
            className={styles.swapIcon}
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.52 1.354a.5.5 0 10-.707-.708L.48 1.98a.5.5 0 000 .707L1.813 4.02a.5.5 0 00.707-.707l-.48-.48h6.793a.5.5 0 100-1H2.04l.48-.48zM8.48 5.98a.5.5 0 000 .707l.48.48H2.167a.5.5 0 100 1H8.96l-.48.48a.5.5 0 10.707.707L10.52 8.02a.5.5 0 000-.707L9.187 5.98a.5.5 0 00-.707 0z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          className={`${styles.form__body__group} ${styles['form__body__group--right']}`}
        >
          <label className={styles.form__body__group__label} htmlFor="input">
            Where to?
          </label>
          <div className={styles.form__body__group__input}>Sydney (SYD)</div>
        </div>
      </div>
      <div className={styles.form__row}>
        <div className={styles.form__body__group}>
          <label className={styles.form__body__group__label} htmlFor="input">
            Dates
          </label>
          <div className={styles.form__body__group__input}>
            Sat 11 Jun - Sat 25 Jun
          </div>
        </div>
        <div className={styles.form__body__group}>
          <label
            className={styles.form__body__group__label}
            htmlFor="passengers"
          >
            Passengers
          </label>
          <div className={styles.form__body__group__input}>
            2 Adults, Any class
          </div>
        </div>
      </div>
      <button className={styles.form__body__submit} type="submit">
        Search flights
      </button>
    </div>
  );
}
