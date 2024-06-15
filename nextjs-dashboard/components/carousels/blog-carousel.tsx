'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import styles from './blog-carousel.module.scss';

export default function BlogCarousel() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '12%',
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '18%',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '4.5%',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '12%',
        },
      },
    ],
  };

  const blogs = [
    {
      src: '/images/blog/article-one.jpg',
      alt: 'sydney',
      heading: 'Destination',
      text: 'The most beautiful locations around the world that you don’t want to miss',
    },
    {
      src: '/images/blog/article-two.jpg',
      alt: 'Follow us on Twitter',
      heading: 'Destination',
      text: 'The most beautiful locations around the world that you don’t want to miss',
    },
    {
      src: '/images/blog/article-three.jpg',
      alt: 'Follow us on Twitter',
      heading: 'Destination',
      text: 'The most beautiful locations around the world that you don’t want to miss',
    },
    {
      src: '/images/destinations/gold-coast.jpg',
      alt: 'Follow us on Twitter',
      heading: 'Destination',
      text: 'The most beautiful locations around the world that you don’t want to miss',
    },
    {
      src: '/images/destinations/cairns.jpg',
      alt: 'Follow us on Twitter',
      heading: 'Destination',
      text: 'The most beautiful locations around the world that you don’t want to miss',
    },
    {
      src: '/images/destinations/uluru.jpg',
      alt: 'Follow us on Twitter',
      heading: 'Destination',
      text: 'The most beautiful locations around the world that you don’t want to miss',
    },
  ];

  return (
    <div className={styles['blog-carousel__wrapper']}>
      <div className={styles['blog-carousel__container']}>
        <div className={styles['blog-carousel__explore']}>
          <Slider {...settings}>
            {blogs.map((slide, index) => (
              <div className={styles['blog-carousel__slide']} key={index}>
                <div className={styles['blog-carousel__content']}>
                  <figure>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={704}
                      height={552}
                      loading='lazy'
                    />
                  </figure>
                  <div className={styles['blog-carousel__text']}>
                    <div>
                      <h2 className={styles['blog-carousel__heading']}>
                        {slide.heading}
                      </h2>
                      <p className={styles['blog-carousel__place']}>
                        {slide.text}
                      </p>
                    </div>
                    <Link href="#" className={styles['blog-carousel__button']}>
                      Read blog article
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
