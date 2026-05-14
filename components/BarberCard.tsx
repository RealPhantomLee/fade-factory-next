import { Barber } from '@/types/barber';
import Image from 'next/image';
import styles from './BarberCard.module.css';

interface BarberCardProps {
  barber: Barber;
}

export const BarberCard = ({ barber }: BarberCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={barber.image} 
          alt={barber.name} 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className={styles.name}>{barber.name}</h3>
      <p className={styles.bio}>{barber.bio}</p>
    </div>
  );
};
