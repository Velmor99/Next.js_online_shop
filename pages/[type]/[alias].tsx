import React from 'react';
import { withLayout } from '../../layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';
import Head from 'next/head';

function TopPage({ page, products, firstCategory }: CourseProps): JSX.Element {
  return (
    <>
    <Head>
      <title>{'приходит с бека'}</title>
      <meta name='description' content={'metaDescription с бека'}></meta>
      <meta property='og:title' content={'metaTitle с бека'}></meta>
      <meta property='og:description' content={'metaDescription с бека'}></meta>
      <meta property='og:url' content={'metaDescription с бека'}></meta>
    </Head>
      <TopPageComponent
        firstCategory={firstCategory}
        products={products}
        page={page}
      />
    </>
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/findByCategory`, {firstCategory: m.route});
    paths = paths.concat(menu.flatMap((s) => s.pages.map((page) => `/${m.route}/${page.alias}`)));
  }

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
  if(!firstCategoryItem) {
    return {
      notFound: true
    };
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/findByCategory`, {firstCategory: firstCategoryItem.route}
    );
    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/findByAlias/${params.alias}`
    );
    console.log('page', page)
    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + `/api/product/find`, {category: page.category, limit: 10}
    );
    console.log('products', products)
    return {
      props: {
        menu,
        firstCategory: "Courses",
        page,
        products,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: string;
  page: TopPageModel;
  products: ProductModel[];
}
