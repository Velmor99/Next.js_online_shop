import styles from './Carousel.module.css';
import { CarouselCard } from "../CarouselCard/CarouselCard";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Carousel = () => {
  const [width, setWidth] = useState(0);
  const setSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', setSize);
    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <div>
      <h2>Курсы с самым высоким рейтингом</h2>
      <div className={styles.carousel}>
        {width >= 1248 ?
          <>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </> : width >= 800 ? <>
            <CarouselCard />
            <CarouselCard />
          </> : <CarouselCard />
        }
      </div>
      <Link href="/search?q=курс">Больше курсов</Link>
    </div>
  )
}