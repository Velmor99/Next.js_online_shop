import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({ size = 'S', children, color = 'ghost', href, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.small]: size === 'S',
        [styles.medium]: size === 'M',
        [styles.large]: size === 'L',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
        [styles.gray]: color === 'gray',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
