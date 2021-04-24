import { Category } from './category';

export interface Article {
    articleID?: number,
    title?: string,
    photoURL?: string,
    content?: string,
    category?: Category
}
