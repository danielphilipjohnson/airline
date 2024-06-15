'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './destination-carousel.module.scss';

const destinations = [
  { src: '/images/destinations/sydney.jpg', alt: 'Sydney', name: 'Sydney', country: 'Australia' },
  { src: '/images/destinations/melbourne.jpg', alt: 'Melbourne', name: 'Melbourne', country: 'Australia' },
  { src: '/images/destinations/brisbane.jpg', alt: 'Brisbane', name: 'Brisbane', country: 'Australia' },
  { src: '/images/destinations/gold-coast.jpg', alt: 'Gold Coast', name: 'Gold Coast', country: 'Australia' },
  { src: '/images/destinations/cairns.jpg', alt: 'Cairns', name: 'Cairns', country: 'Australia' },
  { src: '/images/destinations/uluru.jpg', alt: 'Uluru', name: 'Uluru', country: 'Australia' },
];

const Carousel = () => {
  const settings = useMemo(() => ({
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }), []);

  const renderSlide = (destination) => (
    <div className={styles.destinationSlide} key={destination.name}>
      <div className={styles.destinationContainer}>
        <figure>
          <Image
            src={destination.src}
            alt={`${destination.name}, ${destination.country}`}
            width={704}
            height={552}
            loading="lazy"
          />
        </figure>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{destination.name}</h2>
          <p className={styles.place}>{destination.country}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Exploring Australia</h2>
        <div className={styles.exploreCarousel}>
          <Slider {...settings}>
            {destinations.map(renderSlide)}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
