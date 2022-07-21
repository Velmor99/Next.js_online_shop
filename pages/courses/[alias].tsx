import React from 'react';
import { withLayout } from '../../layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';
const firstCategory = 0;

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return (
    <>
      <p>{products && products.length}</p>
    </>
  );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/categories');
  console.log(menu.flatMap((m) => m.pages.map((page) => '/courses/' + page.alias)))
  return {
    paths: [
        '/courses/financial-analitics',
        '/courses/big-data',
        '/courses/data-science',
        '/courses/machine-learning'
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
  const { data: page } = await axios.get<TopPageModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + `/pages?alias=${params.alias}`
  );
  const category = page[0].category;
  const { data: products } = await axios.get<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + `/products?category=${category}`
  );
  return {
    props: {
      firstCategory,
      page,
      products,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  firstCategory: number;
  page: TopPageModel[];
  products: ProductModel[];
}
