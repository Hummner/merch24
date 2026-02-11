import { ArticleVariant } from "./article-variant";

export interface ArticleColors {
    
    images: {alt:string, id:number, image:string}[],
    hex: string,
    variants: ArticleVariant[]

}
