import { Component, OnInit } from '@angular/core';
import { Article } from '../_model/article';
import { AlertifyService } from '../_services/alertify.service';
import { ArticleService } from '../_services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.articleService.getAll().subscribe((articles: Article[]) =>{
      this.articles = articles;
    }, error => {
      this.alertify.error(error.message || "Nije moguce ucitati clanke");
    })
  }

  deleteArticle(id: number){
    this.articleService.delete(id).subscribe(() =>{
      this.articles = this.articles.filter(x => x.articleID !== id );
    }, error => {
      this.alertify.error('Nije moguce obrisati zeljeni clanak');
    });


    
  }

}
