import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor( public http: HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:3000/prods/all');
  }
}
