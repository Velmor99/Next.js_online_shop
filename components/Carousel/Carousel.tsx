import styles from './Carousel.module.css';
import { CarouselCard } from "../CarouselCard/CarouselCard";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MathImage from '../../public/carousel/math.png';
import PythonImage from '../../public/carousel/python.png';
import PsychologyImage from '../../public/carousel/psychology.png';

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
        {width >= 1530 ?
          <>
            <CarouselCard
              className={styles.carouselGridItem}
              title={"Матанализ для самых маленьких"}
              img={MathImage}
              tags={["Математика", "Анализ"]}
              discount={-10000}
              price={24000}
              companyName={"Skillbox School"}
              rating={5}
              feedbackCount={4}
            />
            <CarouselCard
              className={styles.carouselGridItem}
              title={"Python vol.1"}
              img={PythonImage}
              tags={["Python", "IT"]}
              discount={-2000}
              price={12000}
              companyName={"GoIt"}
              rating={5}
              feedbackCount={20}
            />
            <CarouselCard
              className={styles.carouselGridItem}
              title={"Клиническая психология"}
              img={PsychologyImage}
              tags={["Психология", "Медицина"]}
              discount={-4000}
              price={9000}
              companyName={"Boris clinic"}
              rating={5}
              feedbackCount={1}
            />
          </> : width >= 1130 ? <>
          <CarouselCard
              className={styles.carouselGridItem}
              title={"Матанализ для самых маленьких"}
              img={MathImage}
              tags={["Математика", "Анализ"]}
              discount={-10000}
              price={24000}
              companyName={"Skillbox School"}
              rating={5}
              feedbackCount={4}
            />
            <CarouselCard
              className={styles.carouselGridItem}
              title={"Python vol.1"}
              img={PythonImage}
              tags={["Python", "IT"]}
              discount={-2000}
              price={12000}
              companyName={"GoIt"}
              rating={5}
              feedbackCount={20}
            />
          </> : <CarouselCard
              className={styles.carouselGridItem}
              title={"Матанализ для самых маленьких"}
              img={MathImage}
              tags={["Математика", "Анализ"]}
              discount={-10000}
              price={24000}
              companyName={"Skillbox School"}
              rating={5}
              feedbackCount={4}
            />
        }
      </div>
      <Link href="/search?q=курс">Больше курсов</Link>
    </div>
  );
};