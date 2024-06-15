import styles from './service-cards.module.scss';
import Card from './card';
import BuyLaterCard from './buy-later-card';

import ServiceIcon from '../icons/service-icon';
import SearchIcon from '../icons/search-icon';
import ChoiceIcon from '../icons/choice-icon';

export default function ServiceCards() {
  return (
    <div className={`${styles.wrapper} ` }>
      <div className={`${styles.container} container`}>
        <Card
          icon={<SearchIcon />}
          heading="Simple search"
          text="Easily search and book flights from anywhere in the world"
        />
        <Card
          icon={<ChoiceIcon />}
          heading="Unlimited choice"
          text="Find the flight you were looking for and pay on your terms"
        />

        <Card
          icon={<ServiceIcon />}
          heading="Expert customer service"
          text="Dedicated customer support team once you have booked"
        />

      </div>
      <BuyLaterCard
        heading="Buy now, pay later"
        text="Book your flight today and spread the cost over time with one of our
      installment options."
      />
    </div>
  );
}
