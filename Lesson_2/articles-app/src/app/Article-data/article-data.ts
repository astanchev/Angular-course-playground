import { Article } from './article';
import { data } from './data';

export class ArticleData {
    getData() : Article[] {
        let articles : Article[] = [];

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const article = new Article(
                element.title,
                element.description,
                element.author,
                element.imageUrl);

            articles.push(article);
        }

        return articles;
    }
}