export enum TopLevelCategory {
    Courses = "Courses",
    Services = "Services",
    Books = "Books",
    Products = "Products"
}

export interface TopPageAdvantage {
    _id: string;
    title: string;
    desctiption: string;
}

export interface grcData {
    _id: string;
    count: number;
    juniorSalary: number;
    seniorSalary: number;
    updatedAt: Date;
}

export interface TopPageModel {
    tags: string[];
    id: number;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages: TopPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: grcData
}