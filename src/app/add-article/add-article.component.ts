import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../_model/article';
import { AlertifyService } from '../_services/alertify.service';
import { ArticleService } from '../_services/article.service';
import {NgForm} from '@angular/forms';
import { Category } from '../_model/category';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article: Article = {category: {}};
  categories: Category[] = [];


  constructor(private articleService: ArticleService, 
    private alertify: AlertifyService,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    }, error => {
      this.alertify.error(error.message || 'Nije moguce ucitati kategorije');
      this.router.navigate(['']);
    });
  }


  insertArticle(){
    if(!this.article?.title || !this.article?.category 
      || !this.article?.content || !this.article?.photoURL){
        this.alertify.warning("Morate uneti sve podatke");
        return;
      }
      

    this.articleService.insert(this.article).subscribe(() =>{
      this.alertify.success("Uspesno je unet novi clanak");
      this.router.navigate(['']);
    }, error => {
      this.alertify.error(error.message || 'Neuspesan unos');
    })
  }

  reload(){
    this.article = {category: {}};
  }
}
