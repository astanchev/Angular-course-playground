import { Component, Input } from '@angular/core';
import { Article } from '../Article-data/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() articleDesc: string;

  private symbols: number = 250;

  public descToShow: string;
  public articleDescLen: number;
  public showReadMoreBtn: boolean = true;
  public showHideBtn: boolean = false;
  public imageIsShown: boolean = false;
  public imageButtonTitle: string = 'Show Image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
   }

   readMore(): void {
     this.articleDescLen += this.symbols;

     if (this.articleDescLen >= this.articleDesc.length) {
       this.showHideBtn = true;
       this.showReadMoreBtn = false;
     } else {
       this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
     }
   }

   toggleImage(): void {
     this.imageIsShown = !this.imageIsShown;
     this.imageButtonTitle = this.imageButtonTitle === 'Show Image' ?
                                                  'Hide Image' :
                                                  'Show Image'
   }

   hideDesc(): void {
     this.descToShow = '';
     this.articleDescLen = 0;
     this.showHideBtn = false;
     this.showReadMoreBtn = true;
   }
}
