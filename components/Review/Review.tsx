import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import cn from 'classnames';
import UserIcon from './user.svg';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>name:</span>&nbsp;&nbsp;
        <span>title</span>
      </div>
      <div className={styles.date}>{format(new Date('2022-05-21T17:54:12.3342'), 'dd MMMM yyyy', { locale: uk })}</div>
      <div className={styles.rating}>
        <Rating rating={4} />
      </div>
      <div className={styles.description}>
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но
        здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту
        профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять
        Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу
        так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня
        занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как
        прошедший это – реально помогло в трудоустройстве!
      </div>
    </div>
  );
};
