import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AddArticleComponent } from './add-article/add-article.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { CategoryService } from './_services/category.service';
import { ArticleService } from './_services/article.service';
import { AlertifyService } from './_services/alertify.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { FormsModule } from '@angular/forms';
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddArticleComponent,
    SingleArticleComponent,
    ArticleDetailComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CategoryService,
    ArticleService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
