import styles from './form.module.scss';
export function Form() {
  return (
    <div className={styles.form__body}>
      <div className={styles.form__body__group}>
        <label className={styles.form__body__group__label} htmlFor="input">Where from?</label>
        <input className={styles.form__body__group__input} id="input" type="text" 
            placeholder="London (LON)" />
      </div>
      {/*<div
        class="Dropdown"
      >
        <div>
          <div class="Dropdown_title__cEB8Z">
            Begin typing to search airports
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              class="Dropdown_close__JFdK4"
              aria-label="Close"
              role="button"
              tabindex="0"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.752.752 0 01-.23 1.244.748.748 0 01-.83-.184L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div class="AirportField_airportSearch__BMaaO">
            <input
              class="Input_input__LYUld AirportField_input__C0fpS"
              placeholder="Where from?"
            />
          </div>
          <div class="AirportField_searchesHeader__3M_l3">
            <h4 class="AirportField_searchesTitle__sJ_Bq">
              Your recent searches
            </h4>
          </div>
          <div>
            <div class="RecentSearch_searchResult__MHcQk">
              <button
                class="NewButton_button__Br6KV NewButton_md__lBSI4 RecentSearch_closeButton__lV6uW"
                role="button"
                tabindex="0"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="grey"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.752.752 0 01-.23 1.244.748.748 0 01-.83-.184L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <a
                href="/flights/multi?origin=LHR&amp;destination=LIM&amp;outbound=2024-08-24&amp;1origin=LIM&amp;1destination=LHR&amp;1outbound=2024-08-30&amp;adults=1&amp;children=0&amp;infants=0&amp;class=Y&amp;currency=GBP"
                class="RecentSearch_component__KYRpZ"
              >
                <div class="RecentSearch_part__9GZwz">
                  <div class="RecentSearch_airportAndDate__PidV_">
                    <div class="RecentSearch_city__x3_Fn">London Heathrow</div>
                    <div class="RecentSearch_date__lRscF">Sat, 24th Aug</div>
                  </div>
                  <div class="RecentSearch_code__nyD9s">LHR</div>
                </div>
                <div class="RecentSearch_tripTypeIcon__Y_S_C">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="grey"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 110 1.5H4.81l3.22 3.22a.749.749 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div class="RecentSearch_part__9GZwz">
                  <div class="RecentSearch_airportAndDate__PidV_">
                    <div class="RecentSearch_city__x3_Fn">Lima</div>
                    <div class="RecentSearch_date__lRscF">One way</div>
                  </div>
                  <div class="RecentSearch_code__nyD9s">LIM</div>
                </div>
              </a>
              <button
                class="NewButton_button__Br6KV NewButton_md__lBSI4 RecentSearch_goButton__5QnmH"
                role="button"
                tabindex="0"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="grey"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <hr />
          <div class="AirportField_results__Vnit9"></div>
        </div>
      </div>*/}
      <div className={styles.form__body__group}>
        <label className={styles.form__body__group__label} htmlFor="input">Where to?</label>
        <input className={styles.form__body__group__input} id="input" type="text" 
            placeholder="Sydney (SYD)" />
      </div>
      <div className={styles.form__body__group}>
        <label className={styles.form__body__group__label} htmlFor="input">Dates</label>
        <input className={styles.form__body__group__input} id="input" type="text" 
             placeholder="Sat 11 Jun - Sat 25 Jun" />
      </div>
      <div className={styles.form__body__group}>
        <label className={styles.form__body__group__label} htmlFor="passengers">Passengers</label>
        <input className={styles.form__body__group__input} id="passengers" type="text" 
             placeholder="2 Adults, Any class" />
      </div>
      <button className={styles.form__body__submit}  type="submit">
          Search flights
        </button>
    </div>
  );
}
