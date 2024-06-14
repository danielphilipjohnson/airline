function Explore() {
    const locations = [
      {
        image: 'https://source.unsplash.com/400x300/?sydney,harbour',
        city: 'Sydney',
        country: 'Australia'
      }
    ];
  
    return (
      <div className="explore">
        <h2 className="explore__title">Exploring Australia</h2>
        <div className="explore__cards">
          {locations.map((location, index) => (
            <div className="explore__card" key={index}>
              <img className="explore__image" src={location.image} alt={`${location.city}`} />
              <div className="explore__details">
                <h3 className="explore__city">{location.city}</h3>
                <p className="explore__country">{location.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  // https://www.npmjs.com/package/react-slick