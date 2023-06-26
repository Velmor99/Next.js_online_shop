import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Divider } from '../Devider/Devider';
import { declOfNumber } from '../../helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';
import { Advantages } from '../Advantages/Advantages';

export const Product = motion(
  forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
      visible: { opacity: 1, height: 'auto' },
      hidden: { opacity: 0, height: 0 },
    };

    const scrollToReviewOpened = () => {
      setIsReviewOpened(true);
      reviewRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      reviewRef.current?.focus()
    };

    if(product) {
      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <img
                src={'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg'}
                alt={'no_image'}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              <span><span className="visualyHidden">цена</span>{product.price}</span>
              {product.oldPrice && <Tag className={styles.oldPrice} color="green">
                <span className="visualyHidden">скидка</span>
                {product.price - product.oldPrice}
              </Tag>}
            </div>
            <div className={styles.credit}>
              <span className="visualyHidden">{'кредит '}</span>
              {product.credit}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
              <span className="visualyHidden">{`рейтинг ${product.reviewAvg ? Math.round(product.reviewAvg) : 0}`}</span>
              <Rating rating={product.reviewAvg ? Math.round(product.reviewAvg) : 0} />
            </div>
            <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
            <div className={styles.priceTitle} aria-hidden={true}>цена</div>
            <div className={styles.creditTitle} aria-hidden={true}>кредит</div>
            <div className={styles.rateTitle}><a href="#ref" onClick={scrollToReviewOpened}>{product.reviewCount} {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map(c => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && <div className={styles.advantages}>
                <div className={styles.advTitle}>Преимущества</div>
                <div>{product.advantages.map(adv => 
                <div>
                  <span className={styles.advTitle}>{`${adv.title}: `}</span>
                  <span className={styles.advDescr}>{adv.description}</span>
                </div>)}</div>
              </div>}
              {product.disAdvantages.length > 0 && <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
                <div>{product.disAdvantages.map(disAdv => 
                <div>
                  <span className={styles.advTitle}>{`${disAdv.title}: `}</span>
                  <span className={styles.advDescr}>{disAdv.description}</span>
                </div>)}</div>
              </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Button appearance='primary'>Узнать подробнее</Button>
              <Button
                appearance='ghost'
                arrow={isReviewOpened ? 'down' : 'right'}
                className={styles.reviewButton}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
                aria-expanded={isReviewOpened}
              >Читать отзывы</Button>
            </div>
          </Card>
          <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
            <Card color='blue' className={styles.reviews} ref={reviewRef} tabIndex={isReviewOpened ? 0 : -1}>
              {product.reviews.map(r => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
          </motion.div>
        </div>
      );
    } else {
      return (
        <div>Error</div>
      )
    }
  })
);
