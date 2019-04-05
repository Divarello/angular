import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http: HttpClient) { }

  /** POST: add a new hero to the database */
  addUser(data){
    return this.http.post('http://localhost:3000/users/login', data)

  }
}
