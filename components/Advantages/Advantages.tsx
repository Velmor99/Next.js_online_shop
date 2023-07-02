import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import TickIcon from './tick.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages?.map(a => (
        <div key={a.title} className={styles.advantage}>
          <TickIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
