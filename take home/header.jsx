function App() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="header__title">Search and book flights to Australia</h1>
          <p className="header__subtitle">Buy your flights now and pay later</p>
          <div className="header__trustscore">
            <span className="header__trustscore-stars">★★★★☆</span>
            <span className="header__trustscore-score">TrustScore 4.5 | 6,500 reviews</span>
          </div>
        </div>
        <div className="search-form">
          <div className="search-form__tabs">
            <button className="search-form__tab search-form__tab--active">Return</button>
            <button className="search-form__tab">One way</button>
            <button className="search-form__tab">Multi-city</button>
          </div>
          <form className="search-form__body">
            <div className="search-form__group">
              <label className="search-form__label" htmlFor="from">Where from?</label>
              <input className="search-form__input" type="text" id="from" placeholder="London (LON)" />
            </div>
            <div className="search-form__group">
              <label className="search-form__label" htmlFor="to">Where to?</label>
              <input className="search-form__input" type="text" id="to" placeholder="Sydney (SYD)" />
            </div>
            <div className="search-form__group">
              <label className="search-form__label" htmlFor="dates">Dates</label>
              <input className="search-form__input" type="text" id="dates" placeholder="Sat 11 Jun - Sat 25 Jun" />
              <span className="search-form__info">14 Nights</span>
            </div>
            <div className="search-form__group">
              <label className="search-form__label" htmlFor="passengers">Passengers</label>
              <input className="search-form__input" type="text" id="passengers" placeholder="2 Adults, Any class" />
            </div>
            <button className="search-form__submit" type="submit">Search flights</button>
          </form>
        </div>
      </div>
    );
  }