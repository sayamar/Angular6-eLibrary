import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ebook } from './ebook';
import { Forex } from './forex';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EbookService {
  private ebooksUrl = 'http://localhost:8081/api/books';
  private addBookUrl = 'http://localhost:8081/api/add'; // URL to web api
  private myBooksUrl = 'http://localhost:8081/api/myBooks';
  private addMyBooksUrl = 'http://localhost:8081/api//api/addToMyLib/{id}';

  //forex rates
  private forexRatesUrl ='http://localhost:8084/latest/rates';
  
  constructor(
    private http: HttpClient ) { }

  getBooks(): Observable<Ebook[]> {
    return this.http.get<Ebook[]>(this.ebooksUrl);
  }

  getMyBooks(): Observable<Ebook[]> {
   
    return this.http.get<Ebook[]>(this.myBooksUrl);
  }

  addBook(ebook: Ebook): Observable<Ebook> {
    return this.http.post<Ebook>(this.addBookUrl, ebook, httpOptions);
  }

  getBook(bookName: String): Observable<Ebook[]> {
    alert("book name" + bookName);
    const url = `${this.ebooksUrl}/${bookName}`;
    return this.http.get<Ebook[]>(url);
  }

  getBookById(bookid: number): Observable<Ebook[]> {
    alert("book name" + bookid);
    const url = `${this.ebooksUrl}/${bookid}`;
    return this.http.get<Ebook[]>(url);
  }

  getCurrencies(): Observable<Forex[]> {
    return this.http.get<Forex[]>(this.forexRatesUrl);
  }

  getData(base: String, target: String): Observable<Forex[]> {
    alert(""+base);
    alert(""+target);
    const urlone = `${this.forexRatesUrl}/${base}/${target}`;
    return this.http.get<Forex[]>(urlone);
  }

}