import { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CarouselCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  title: string;
  img: StaticImageData;
  tags: string[];
  discount: number;
  price: number;
  companyName: string;
  rating: number;
  feedbackCount: number;
}