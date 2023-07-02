import Image from 'next/image';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import styles from './CarouselCard.module.css';
import cn from 'classnames';
import { CarouselCardProps } from './CarouselCard.props';
import { declOfNumber, priceUah } from '../../helpers/helpers';


export const CarouselCard = ({className, img, title, companyName, tags, price, discount, rating, feedbackCount}: CarouselCardProps) => {
  return (
    <div className={cn(styles.carouselCardContainer, className)}>
      <div className={styles.imageContainer}>
        <Image height={210} width={394} className={styles.image} src={img} alt={'banner'}></Image>
      </div>
      <div className={styles.mainBlock}>
      <h3 className={styles.mainTitle}>{title}</h3>
        <div className={styles.leftSide}>
          <div className={styles.label}>
            <div className={styles.secondaryImageBlock}>
            <img className={styles.secondaryImage} src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}></img>
            </div>
            <h4 className={styles.secondaryTitle}>{companyName}</h4>
          </div>
          <div className={styles.ratingBlock}>
            <Rating rating={rating}></Rating>
            <span>{`${feedbackCount} ${declOfNumber(feedbackCount, ['отзыв', 'отзыва', 'отзывов'])}`}</span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.tags}>
            {tags.map(t => <Tag key={t} color='ghost'>{t}</Tag>)}
          </div>
          <div className={styles.priceBlock}>
            <span className={styles.price}>{priceUah(price)}</span>
            <Tag className={styles.tag} color='green'>{discount}</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};