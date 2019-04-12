import {Data} from './data';
export class Reponse {
  private _status:string;
  private _message :string;
  private _data:Data;

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get data(): Data {
    return this._data;
  }

  set data(value: Data) {
    this._data = value;
  }
}
