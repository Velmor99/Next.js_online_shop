import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next';
import React from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import { Error404 } from './404';
import { Head } from 'next/document';
import { TopPageComponent } from '../page-components';
import { TopPageModel } from '../interfaces/page.interface';
import { ProductModel } from '../interfaces/product.interface';


function Search({products, firstCategory, page}: SearchProps): JSX.Element {

	if ( !products || products.length === 0 ) {
		return <Error404 />;
	}

  return (
    <>
      <TopPageComponent
        firstCategory={firstCategory}
        products={products}
        page={page}
      />
    </>
	);
}

export default withLayout(Search);

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
	const firstCategory = "Courses"
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/findByCategory`, {firstCategory: firstCategory});
	const { data: products } = await axios.post<ProductModel[]>(
		process.env.NEXT_PUBLIC_DOMAIN + `/api/product/searchByText`, {text: context.query.q}
	);
	const { data: page } = await axios.get<TopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/findByAlias/IT`
	);
  return {
    props: {
			menu,
			products,
			firstCategory,
			page
		}
  }
}

interface SearchProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: string;
  page: TopPageModel;
  products: ProductModel[];
}