import CoursesIcon from './icons/hat.svg';
import ServicesIcon from './icons/cloud.svg';
import BooksIcon from './icons/book.svg';
import ProductsIcon from './icons/box.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'Courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'Services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'Books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'Products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const declOfNumber = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}