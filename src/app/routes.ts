import { Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add', component: AddArticleComponent},
    {path: 'edit/:id', component: EditArticleComponent},
    {path: 'article/:id', component: ArticleDetailComponent},
    {path: '**', redirectTo: '', pathMatch:'full'}
];