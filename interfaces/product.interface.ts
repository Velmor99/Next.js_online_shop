export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface ProductAdvantagesOrDisadvantages {
    title: string;
    description: string;
}

export interface RevieModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link?: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: ProductCharacteristic[];
    advantages: ProductAdvantagesOrDisadvantages[];
    disAdvantages: ProductAdvantagesOrDisadvantages[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    reviews: RevieModel[];
    reviewCount: number;
    reviewAvg?: number;
}