import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/offers';

  constructor(private http: HttpClient) { }

  register(offer: any): Observable<any> {
    return this.http.post(this.apiUrl, offer);
  }
}
