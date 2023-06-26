import styles from './MainPageComponent.module.css';
import { Banner } from "../../components/Banner/Banner";
import { Carousel } from "../../components/Carousel/Carousel";
import { CooperationBlock } from "../../components/Cooperation/Cooperation";

export const MainPageComponent = () => {
  return (
    <div className={styles.mainPage}>
      <Banner />
      <CooperationBlock />
      <Carousel />
    </div>
  );
};