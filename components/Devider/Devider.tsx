import cn from 'classnames';
import styles from './Devider.module.css';
import { HRProps } from './Devider.props';

export const Devider = ({ className, ...props }: HRProps): JSX.Element => {
  return (
    <hr className={cn(className, styles.hr)} {...props} />
  );
};
