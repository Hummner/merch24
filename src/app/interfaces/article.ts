import { ArticleVariant } from "./article-variant";

export type VariantsByColor = Partial<Record<string, ArticleVariant[]>>;

export interface Article {
name: string;
subtitle: string;
description: string;
slug: string;
variant: VariantsByColor;
morePricesExist?: boolean;
}