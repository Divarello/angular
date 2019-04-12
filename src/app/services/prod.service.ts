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

  addProd(prod){
    return this.http.post('http://localhost:3000/prods/add', prod);
  }

  removeProd(id){
    return this.http.delete('http://localhost:3000/prods/remove/' + id);
  }
}
