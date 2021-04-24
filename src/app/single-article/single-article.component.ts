import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../_model/article';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() deleteArticleEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteThisArticle(){
    this.deleteArticleEvent.emit(this.article.articleID);
  }

}
