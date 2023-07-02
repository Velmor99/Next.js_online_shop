import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './arrow.svg';
import cross from './cross.svg';
import menu from './burger.svg';

export const icons = {
 up,
 cross,
 menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: 'primary' | 'white';
}
