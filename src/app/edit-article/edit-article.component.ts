import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../_model/article';
import { Category } from '../_model/category';
import { AlertifyService } from '../_services/alertify.service';
import { ArticleService } from '../_services/article.service';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  oldArticle: Article;
  article: Article = {category: {}};
  categories: Category[];

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute, private alertify: AlertifyService,
    private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    }, error =>{
      this.alertify.error(error.message || 'Neuspelo ucitavanje kategorije');
      this.router.navigate(['']);
    } );

    this.articleService.getById(this.route.snapshot.params['id']).subscribe((article: Article) => {
      this.oldArticle = article;
      this.reset();
    }, error => {
      this.alertify.error(error.message || 'Neuspelo ucitavanje članka');
      this.router.navigate(['']);
    });
  }

  reset(){
    this.article.articleID = this.oldArticle.articleID;
    this.article.title = this.oldArticle.title;
    this.article.content = this.oldArticle.content;
    this.article.photoURL = this.oldArticle.photoURL;
    this.article.category.categoryID = this.oldArticle.category.categoryID;
    this.article.category.name = this.oldArticle.category.name;
    console.log(this.article);
  }

  updateArticle(){
    if(this.article.title != this.oldArticle.title
      || this.article.photoURL != this.oldArticle.photoURL
      || this.article.content != this.oldArticle.content 
      || this.article.category.categoryID != this.oldArticle.category.categoryID){
        this.articleService.update(this.oldArticle.articleID, this.article).subscribe(()=>{
          this.alertify.success("Uspesno ste izmenili članak");
          this.router.navigate(['article', this.oldArticle.articleID]);
        }, (error) => {
          this.alertify.error(error.message || 'Neuspesna izmena clanka');
          this.reset();
        });
        return;
      }
      this.alertify.warning("Nista niste izmenili");

  }

}
