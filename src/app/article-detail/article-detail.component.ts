import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Article } from '../_model/article';
import { AlertifyService } from '../_services/alertify.service';
import { ArticleService } from '../_services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(private alertify: AlertifyService, 
    private route: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getById(this.route.snapshot.params['id']).subscribe((article: Article) => {
      this.article = article;
    }, error => {
      this.alertify.error(error.message || 'Neuspelo ucitavanje artikla');
    });
  }

}
