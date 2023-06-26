import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import {Search} from '../../components';
import Link from 'next/link';

export const Sidebar = ({className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Link href={'/'}><Logo className={styles.logo} /></Link> 
      <Search />
      <Menu />
    </div>
  );
};
