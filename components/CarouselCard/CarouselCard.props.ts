import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CarouselCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}