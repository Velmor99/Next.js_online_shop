import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

//этот длинный экстенд нужен что бы у кнопки в пропсах были ее дефолтные пропсы типа onClick
//нужный элемент ищем в index.d.ts
//41 лекция
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}
