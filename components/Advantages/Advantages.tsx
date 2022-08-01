import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import cn from 'classnames';
import TickIcon from './tick.svg';
import { Paragraph } from '../Paragraph/Paragraph';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div>
      <div className={styles.advantage}>
        <TickIcon />
        <div className={styles.title}></div>
        <hr className={styles.vline}></hr>
        <Paragraph size="M">
          Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или
          в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В
          этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
        </Paragraph>

        <TickIcon />
        <div className={styles.title}></div>
        <hr className={styles.vline}></hr>
        <Paragraph size="M">
          Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или
          в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В
          этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
        </Paragraph>

        <TickIcon />
        <div className={styles.title}></div>
        <hr className={styles.vline}></hr>
        <Paragraph size="M">
          Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или
          в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В
          этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
        </Paragraph>
      </div>
    </div>
  );
};
