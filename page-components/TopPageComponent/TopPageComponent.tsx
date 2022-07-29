import cn from 'classnames';
import { useEffect, useReducer } from 'react';
import { Htag, Tag, HhData, Advantages, Paragraph, Sort, Product } from '../../components';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useScrollY } from '../../hooks/useScrollY';
import { sortReducer } from './sort.reducer';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const y = useScrollY();

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">Курсы по Photoshop</Htag>
        <Tag color="gray">10</Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        <p>Финансовый аналитик</p>
        <p>Финансовый аналитик</p>
        <p>Финансовый аналитик</p>
      </div>

      <Product layout />

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии по photoshop</Htag>
        <Tag color="red">grc.ua</Tag>
      </div>
      <HhData />
      <>
        <Htag tag="h2">Преимущества</Htag>
        <Advantages></Advantages>
      </>
      {/* Seo text html-react-parser */}
      <Paragraph size="M">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.
        Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
        Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
        tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
      </Paragraph>
      {/* Seo text html-react-parser */}
      <Htag tag="h2">Получаемые навыки</Htag>
      <Tag color="primary">Работа в Photoshop</Tag>
      <Tag color="primary">Подготовка макетов</Tag>
      <Tag color="primary">Графический дизайн</Tag>
      <Tag color="primary">Web дизайн</Tag>
      <Tag color="primary">Дизайн сайтов</Tag>
    </div>
  );
};
