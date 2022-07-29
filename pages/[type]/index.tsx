import React from 'react';
import { withLayout } from '../../layout/Layout';
import {GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';

function Type(): JSX.Element {
  return (
    <></>
  );
}

export default withLayout(Type);

// export const getStaticPaths: GetStaticPaths = async () => {
//   // let paths: string[] = [];
//   // for (const m of firstLevelMenu) {
//   //   const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/${m}`);
//   //   paths = paths.concat(menu.flatMap((s) => s.pages.map((page) => `/${m.route}/${page.alias}`)));
//   // }
  
//   return {
//     paths: [
//       '/couses/financial-analytics',
//       '/couses/big-data',
//       '/couses/data-science',
//       '/couses/machine-learning',
//       '/couses/finansovaya-gramotnost',
//       '/couses/enterpreneurs',
//       '/couses/graphic-design',
//       '/couses/dizayn-interera',
//       '/couses/web-design',
//       '/couses/photoshop',
//       '/couses/ArchiCAD',
//       '/couses/landscape-design',
//       '/couses/skethcing',
//       '/couses/illustration',
//       '/couses/seo',
//       '/couses/smm',
//       '/couses/copywriting',
//       '/couses/targeting',
//       '/couses/python',
//       '/couses/1C',
//       '/couses/photography',
//     ],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<CourseProps> = async ({
//   params,
// }: GetStaticPropsContext<ParsedUrlQuery>) => {
//   if (!params) {
//     return {
//       notFound: true,
//     };
//   }
//   const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
//   if(!firstCategoryItem) {
//     return {
//       notFound: true
//     }
//   }
//   try {
//     const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/courses`);
//     if(menu.length === 0) {
//       return {
//         notFound: true
//       }
//     }
//     const { data: page } = await axios.get<TopPageModel[]>(
//       process.env.NEXT_PUBLIC_DOMAIN + `/pages?alias=${params.alias}`
//     );
//     const category = page[0].category;
//     const { data: products } = await axios.get<ProductModel[]>(
//       process.env.NEXT_PUBLIC_DOMAIN + `/products?category=${category}`
//     );
//     return {
//       props: {
//         menu,
//         firstCategory: firstCategoryItem.id,
//         page,
//         products,
//       },
//     };
//   } catch(err) {
//     return {
//       notFound: true
//     }
//   }
  
// };

// interface CourseProps extends Record<string, unknown> {
//   menu: MenuItem[];
//   firstCategory: number;
//   page: TopPageModel[];
//   products: ProductModel[];
// }
