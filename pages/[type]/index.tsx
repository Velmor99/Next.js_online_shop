import React from 'react';
import { withLayout } from '../../layout/Layout';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers/helpers';

function Type({firstCategory}: CourseProps): JSX.Element {

  return (
    <>
     Type: { firstCategory }
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => '/' + m.route),
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
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/findByCategory`, {firstCategory: firstCategoryItem.route});
    return {
      props: {
        menu: menu,
        firstCategory: firstCategoryItem.route,
      },
    };
  } catch(err) {
    return {
      notFound: true
    };
  }
  
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: string;
}
