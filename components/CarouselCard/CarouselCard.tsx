import Image from 'next/image';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import styles from './CarouselCard.module.css';
import cn from 'classnames';
import { CarouselCardProps } from './CarouselCard.props';


export const CarouselCard = ({className}: CarouselCardProps) => {
  return (
    <div className={cn(styles.carouselCardContainer, className)}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}></img>
      </div>
      <div className={styles.mainBlock}>
      <h3 className={styles.mainTitle}>Матанализ для самых маленьких</h3>
        <div className={styles.leftSide}>
          <div className={styles.label}>
            <div className={styles.secondaryImageBlock}>
            <img className={styles.secondaryImage} src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}></img>
            </div>
            <h4 className={styles.secondaryTitle}>Skillbox School</h4>
          </div>
          <div className={styles.ratingBlock}>
            <Rating rating={4}></Rating>
            <span>20 отзывов</span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.tags}>
            <Tag color='ghost'>Математика</Tag>
            <Tag color='ghost'>Анализ</Tag>
          </div>
          <div className={styles.priceBlock}>
            <span className={styles.price}>24000</span>
            <Tag className={styles.tag} color='green'>-10000</Tag>
          </div>
        </div>
      </div>
    </div>
  )
}