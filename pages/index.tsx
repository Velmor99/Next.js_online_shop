import React from 'react';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { MainPageComponent } from '../page-components/MainPageComponent/MainPageComponent';
import { API } from '../helpers/api';

function Home(): JSX.Element {
  return (
    <>
      <MainPageComponent />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = "Courses";
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + API.topPage.find, {firstCategory: "Courses"});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: string,
}
