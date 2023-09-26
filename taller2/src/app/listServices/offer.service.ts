import { Injectable } from '@angular/core';
import { Offer } from '../models/offer.model';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  base_Url ="http://localhost:3000/offers";
  constructor(private http: HttpClient) { }

  httpOptions =
  {
    headers: new  HttpHeaders({
        'Content-type':'application/json',

     }),
  };

  handleError(error : HttpErrorResponse)  
  {
    if(error.error instanceof ErrorEvent)
    {
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    }
    else{
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError
    (
      'Something happend with request, try again'
    );
  } 

  getList():Observable<Offer>
  {
    return this.http.get<Offer>(this.base_Url)
    .pipe(retry(2),catchError(this.handleError));
  }

  getItem(id:string|null):Observable<Offer>
  {
    return this.http.get<Offer>(this.base_Url+'/'+id)
    .pipe(retry(2),catchError(this.handleError));
  }

  updateItem(Id:string,item:any): Observable<Offer>
  {
    return this.http.put<Offer>(this.base_Url+'/'+ Id,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2),catchError(this.handleError));
  }

  createItem(item:any):Observable<Offer>
  {
    return this.http
    .post<Offer>(this.base_Url,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  deleteItem(id:string):Observable<Offer>
  {
    return this.http.delete<Offer>(`${this.base_Url}/${id}`,this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

}