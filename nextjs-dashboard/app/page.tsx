
import { Hero } from '@/components/hero/hero';
import ServiceCards from '@/components/cards/service-cards';
import CancellationCard from '@/components/cards/cancellation-card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCarousel from '@/components/carousels/blog-carousel';
import DestinationCarousel from '@/components/carousels/destination-carousel';
import Navbar from '@/components/navbar/navbar';

import 'reset-css';
import { Poppins } from 'next/font/google'
import '@/styles/global.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700"] });
export default function Page() {
  return (
    <main className={poppins.className}>

      <Navbar />
      <Hero backgroundImage="/images/background-image.jpg"  subtitle="Buy your flights now and pay later" title="Search and book flights to Australia" trustScoreText="TrustScore 4.5 | 6,500 reviews" />
      <ServiceCards />
      <DestinationCarousel />
      <CancellationCard heading="Cancellation protection" text="During these uncertain times we recommend adding Cancellation protection to you booking" />
      <BlogCarousel />

    </main>
  );
}
