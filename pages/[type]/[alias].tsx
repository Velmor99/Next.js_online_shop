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
  // let paths: string[] = [];
  // for (const m of firstLevelMenu) {
  //   const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/${m}`);
  //   paths = paths.concat(menu.flatMap((s) => s.pages.map((page) => `/${m.route}/${page.alias}`)));
  // }

  return {
    paths: [
      '/couses/financial-analytics',
      '/couses/big-data',
      '/couses/data-science',
      '/couses/machine-learning',
      '/couses/finansovaya-gramotnost',
      '/couses/enterpreneurs',
      '/couses/graphic-design',
      '/couses/dizayn-interera',
      '/couses/web-design',
      '/couses/photoshop',
      '/couses/ArchiCAD',
      '/couses/landscape-design',
      '/couses/skethcing',
      '/couses/illustration',
      '/couses/seo',
      '/couses/smm',
      '/couses/copywriting',
      '/couses/targeting',
      '/couses/python',
      '/couses/1C',
      '/couses/photography',
      '/couses/design',
    ],
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
  // const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
  // if(!firstCategoryItem) {
  //   return {
  //     notFound: true
  //   }
  // }
  try {
    const { data: menu } = await axios.get<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + `/categories`
    );
    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + `/pages?alias=${params.alias}`
    );
    // const category = page[0].category;
    const { data: products } = await axios.get<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + `/products?category=${'design'}`
    );
    return {
      props: {
        menu,
        firstCategory: 0,
        page,
        products,
      },
    };
  } catch (err) {
    // console.log(err)
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel[];
  products: ProductModel[];
}
