export interface ArticleVariant {
    id: number;
    color: string;
    size?: string;
    stock: number;
    sku: string;
    price: number;
    images: string[];
}