import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph = ({ size = 'S', children, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.small]: size === 'S',
        [styles.medium]: size === 'M',
        [styles.large]: size === 'L',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
