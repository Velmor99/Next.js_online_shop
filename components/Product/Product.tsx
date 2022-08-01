import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Devider } from '../Devider/Devider';
import { declOfNumber } from '../../helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion(
  forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
      visible: { opacity: 1, height: 'auto' },
      hidden: { opacity: 0, height: 0 },
    };

    const scrollToReviewOpened = () => {
      setReviewOpened(true);
      reviewRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      reviewRef.current?.focus()
    };

    return (
      <div className={className} ref={ref} {...props}>
        <Card className={styles.product}>
          <div className={styles.logo}>
            {/* Image is not configured */}
            <img
              className={styles.logoImage}
              src="https://foxminded.ua/wp-content/uploads/2020/03/logo.svg"
              alt="foxmided"
            ></img>
            {/* Image is not configured */}
          </div>
          <div className={styles.title}>Foxminded</div>
          <div className={styles.price}>
            1300
            <Tag className={styles.oldPrice} color="green">
              1000
            </Tag>
          </div>
          <div className={styles.credit}>credit</div>
          <div className={styles.rating}>
            <Rating rating={5} />
          </div>
          <div className={styles.tags}>
            <Tag className={styles.category} color="ghost">
              Программирование
            </Tag>
            <Tag className={styles.category} color="ghost">
              Java
            </Tag>
          </div>
          <div className={styles.priceTitle}>Цена</div>
          <div className={styles.creditTitle}>кредит</div>
          <div className={styles.rateTitle}>
            <a href="#ref" onClick={scrollToReviewOpened}>
              11 {declOfNumber(3, ['отзыв', 'отзыва', 'отзывов'])}
            </a>
          </div>
          <Devider className={styles.hr}></Devider>
          <div className={styles.description}>
            Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки,
            которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
            Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
          </div>
          <div className={styles.features}>
            <div className={styles.characteristics}>
              <span className={styles.charactiristicsName}>Документ об окончании</span>
              <span className={styles.charactiristicsDots}></span>
              <span className={styles.charactiristicsValue}>Диплом</span>
            </div>

            <div className={styles.characteristics}>
              <span className={styles.charactiristicsName}>Сложность</span>
              <span className={styles.charactiristicsDots}></span>
              <span className={styles.charactiristicsValue}>Начальная</span>
            </div>

            <div className={styles.characteristics}>
              <span className={styles.charactiristicsName}>Длительность</span>
              <span className={styles.charactiristicsDots}></span>
              <span className={styles.charactiristicsValue}>5 месяцев</span>
            </div>
          </div>
          <div className={styles.advBlock}>
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала
            </div>
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              Некоторое темы раскрыты не до конца
            </div>
          </div>
          <Devider className={cn(styles.hr, styles.hr2)}></Devider>
          <div className={styles.actions}>
            <Button appearance="primary">Узнать подробнее</Button>
            <Button
              onClick={() => setReviewOpened(!isReviewOpened)}
              className={styles.reviewButton}
              appearance="ghost"
              arrow={isReviewOpened ? 'down' : 'right'}
            >
              Читать отзывы
            </Button>
          </div>
        </Card>
        <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
          <Card tabIndex={isReviewOpened ? 0 : -1} className={cn(styles.reviews)} color="blue" ref={reviewRef}>
            <>
              <Review />
              <Devider />
              <Review />
              <Devider />
              <ReviewForm isOpened={isReviewOpened} productId="lsdkf" />
            </>
          </Card>
        </motion.div>
      </div>
    );
  })
);
