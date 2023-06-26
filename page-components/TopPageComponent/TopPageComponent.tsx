import cn from 'classnames';
import { useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page ? page.title : ''}</Htag>
        {products && <Tag size='M' color="gray">{'элементов найдено: ' + products.length}</Tag>}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div role={'list'}>
        {sortedProducts && sortedProducts.map((p) => (<Product role={'listitem'} layout={shouldReduceMotion ? false : true} key={p._id} product={p} />))}
      </div>
      {/* <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии по photoshop</Htag>
        <Tag color="red">grc.ua</Tag>
      </div> */}
      {/* <HhData /> */}
      {page && page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>Преимущества</Htag>
        <Advantages advantages={page.advantages} />
      </>}
      {page && page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText}}></div>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page && page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>
  );
};
