import { ArticleVariant } from "./article-variant";

export interface ArticleColors {
    color: string,
    images: {alt:string, id:number, image:string}[],
    hex: string,
    variants: ArticleVariant[]

}
