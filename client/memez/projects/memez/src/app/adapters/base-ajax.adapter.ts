import {HttpClient}   from '@angular/common/http';
import {IBaseAdapter} from '../types/interfaces/IBaseAdapter';


export abstract class BaseAjaxAdapter implements IBaseAdapter {
  BASE_URL = 'http://localhost:8080';

  protected constructor(
    private http: HttpClient,
  ) {

  }

  async request<T>(path: string): Promise<T> {
    return this.http
               .get<T>(`${this.BASE_URL}/${path}`)
               .toPromise<T>();
  }
}
