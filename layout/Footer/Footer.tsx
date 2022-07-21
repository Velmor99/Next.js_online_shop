import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import {Paragraph} from '../../components';
import {format} from 'date-fns';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
<div className={cn(className, styles.footer)} {...props}>
  <Paragraph className={styles.paragraph} size='M'>OwlTop © 2020 - {format(new Date(Date.now()), 'yyyy')} Все права защищены</Paragraph>
  <a className={styles.userLink} href='#' target="_blank">Пользовательское соглашение</a>
  <a className={styles.policyLink} href='#' target="_blank">Политика конфиденциальности</a>
</div>
  );
};