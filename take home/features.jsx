function Features() {
    const features = [
      {
        icon: '🔍', // Replace with appropriate icon or use an <img> tag
        title: 'Simple search',
        description: 'Easily search and book flights from anywhere in the world'
      },
      {
        icon: '✈️', // Replace with appropriate icon or use an <img> tag
        title: 'Unlimited choice',
        description: 'Find the flight you were looking for and pay on your terms'
      },
      {
        icon: '💬', // Replace with appropriate icon or use an <img> tag
        title: 'Expert customer service',
        description: 'Dedicated customer support team once you have booked'
      }
    ];
  
    return (
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="feature__icon">{feature.icon}</div>
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__description">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }