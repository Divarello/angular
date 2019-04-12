import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor( public http: HttpClient) { }


  getAll(): Observable<Product>{
    console.log("token" , localStorage.getItem('token'))
    const httpHeader=new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    })



    return this.http.get<Product>('http://localhost:3000/prods/all',{headers: httpHeader});
  }

  addProd(prod){
    const httpHeader=new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    })
    return this.http.post('http://localhost:3000/prods/add', prod,{headers: httpHeader});
  }

  removeProd(id){
    const httpHeader=new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    })
    return this.http.delete('http://localhost:3000/prods/remove/' + id,{headers: httpHeader});
  }
}
