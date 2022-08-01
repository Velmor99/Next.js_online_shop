import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HhDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    count?: string
}