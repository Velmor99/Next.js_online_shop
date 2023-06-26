import Image from "next/image";
import styles from './Banner.module.css';
import { Button } from "../Button/Button"
import { BannerProps } from "./Banner.props"
import WomanImg from './default.png';
import Link from "next/link";

export const Banner = (): JSX.Element => {
  return (
    <div className={styles.bannerContainer}>
      <h2 className={styles.bannerTitle}>
        <span className={styles.titleSecondary}>начните свой путь</span>
        <br />
        <span className={styles.titlePrimary}>в новую карьеру</span>
      </h2>
      <p className={styles.bannerText}>Начните, смените или развивайте карьеру с помощью более чем 5400 курсов, профессиональных сертификаций и дипломных программ от университетов и компаний мирового уровня.</p>
      <Link className={styles.link} href={'/Courses/IT'}>
        <Button className={styles.bannerButton} appearance="primary" children="Найти подходящий курс"></Button>
      </Link>
        <div className={styles.imageBlock}>
          <Image className={styles.image} src={WomanImg} alt="woman"></Image>
        </div>
        <div className={styles.circle}></div>
    </div>
  )
}