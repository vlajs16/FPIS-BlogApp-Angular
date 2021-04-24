import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../_model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = environment.apiUrl + 'article/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl);
  }

  getById(id: number): Observable<Article>{
    return this.http.get<Article>(this.baseUrl + id);
  }

  insert(article: Article){
    return this.http.post(this.baseUrl, article);
  }

  update(id: number, article: Article){
    return this.http.put(this.baseUrl + id, article);
  }

  delete(id: number){
    return this.http.delete(this.baseUrl + id);
  }
}
