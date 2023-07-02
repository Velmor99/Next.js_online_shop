import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TopPageAdvantage } from "../../interfaces/page.interface";

export interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    advantages?: TopPageAdvantage[]
}