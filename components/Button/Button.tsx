import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from './arrow.svg';
import {motion, useMotionValue} from 'framer-motion';
import { useEffect } from "react";

export const Button = ({
  appearance,
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1)

  useEffect(() => {
    scale.onChange(s => console.log(s))
  }, [])

  //Библиотека classnames помогает нам задавать несколько разных классов в зависимости от условий
  //В данном случае в зависимости от пропса appearance
  //Но дефолтный стиль button применится изначально
  //так же мы можем передать проп className который тоже применится
  return (
    <motion.button
    whileHover={{scale: 1.05}}
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
      style={{scale}}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};