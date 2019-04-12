import {Product} from './product';

export class Dataproduct {

  private _data: any
  private _state: string
  private _msg: Product[]

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get msg(): Product[] {
    return this._msg;
  }

  set msg(value: Product[]) {
    this._msg = value;
  }
}
