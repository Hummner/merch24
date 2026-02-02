import { ArticleVariant } from "./article-variant";

export type VariantsByColor  = Record<string, ArticleVariant[]>;

export interface Article {
name: string;
description: string;
slug: string;
variant: VariantsByColor;
}