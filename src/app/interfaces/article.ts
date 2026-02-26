import { ArticleColors } from "./article-colors";
import { Manufacturer } from "./manufacturer";

export type Colors = Partial<[ArticleColors]>;

export interface Article {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    slug: string;
    colors: Colors;
    manufacturer: Manufacturer;
    morePricesExist?: boolean;
    moreVariantsExist?: boolean
}