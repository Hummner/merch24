import { ArticleColors } from "./article-colors";

export type Colors = Partial<Record<string, ArticleColors>>;

export interface Article {
name: string;
subtitle: string;
description: string;
slug: string;
colors: Colors;
morePricesExist?: boolean;
moreVariantsExist?: boolean
}