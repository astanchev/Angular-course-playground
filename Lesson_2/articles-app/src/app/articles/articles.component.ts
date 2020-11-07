import { Component, OnInit } from '@angular/core';
import { Article } from '../Article-data/article';
import { ArticleData } from '../Article-data/article-data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];

  constructor() { }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
