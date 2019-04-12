import {User} from './user';

export class Data {
private _user:User;
private _token:string;

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  set refreshToken(value: string) {
    this._refreshToken = value;
  }

  private _refreshToken:string
}

