import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reponse} from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http: HttpClient) { }

  /** POST: add a new hero to the database */
  addUser(data): Observable<Reponse>{
    return this.http.post<Reponse>('http://localhost:3000/users/login', data)

  }

  addNewUser(data){
    return this.http.post('http://localhost:3000/users/add', data)
  }
}
