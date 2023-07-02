import Image from 'next/image';
import dukeImage from './duke.png';
import googleImage from './google.png';
import ibmImage from './ibm.png';
import illinoisImage from './illinois.png';
import imperialImage from './imperial_college.png';
import pennImage from './penn.png';
import stanfordImage from './stanford.png';
import styles from './Cooperation.module.css';

export const CooperationBlock = () => {
  return (
    <div className={styles.cooperationContainer}>
      <h2 className={styles.cooperationTitle}>
        <span className={styles.cooperationFirstTitle}>Мы сотрудничаем более чем с </span>
        <span className={styles.cooperationSecondTitle}>200 ведущими университетами и компаниями</span>
      </h2>
      <ul className={styles.labelList}>
        <li className={styles.labelListItem}>
          <Image alt='illinois' className={styles.labelImage} src={illinoisImage}></Image>
        </li>
        <li className={styles.labelListItem}>
          <Image alt='duke' className={styles.labelImage} src={dukeImage}></Image>
        </li>
        <li className={styles.labelListItem}>
          <Image alt='google' className={styles.labelImage} src={googleImage}></Image>
        </li>
        <li className={styles.labelListItem}>
          <Image alt='imperial' className={styles.labelImage} src={imperialImage}></Image>
        </li>
        <li className={styles.labelListItem}>
          <Image alt='ibm' className={styles.labelImage} src={ibmImage}></Image>
        </li>
        <li className={styles.labelListItem}>
          <Image alt='stanford' className={styles.labelImage} src={stanfordImage}></Image>
        </li>
        <li className={styles.labelListItem}>
          <Image alt='penn' className={styles.labelImage} src={pennImage}></Image>
        </li>
      </ul>
    </div>
  );
};