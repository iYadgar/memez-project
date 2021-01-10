//region imports
import {HttpClient} from '@angular/common/http';
import {APIEvent}   from "../../../../../../../shared/types/api/api-event";


//endregion
export interface IBaseAdapter {
  request<T>(event: APIEvent, data: any): Promise<T>;

  listenToEvent<T = any>(event_name: APIEvent, fn: Function): Promise<void>;

  stopListeningToEvent<T = any>(event_name: APIEvent): Promise<void>;

  // post<T>(path: string, body: string): Promise<T>

  // delete<T>(path: string): Promise<any>

  // update<T>(path: string, body): Promise<T>
}

export abstract class BaseAjaxAdapter implements IBaseAdapter {
  BASE_URL = 'http://localhost:4000/api';

  protected constructor(
    private http: HttpClient,
  ) {

  }

  async request<T>(path: string): Promise<T> {
    return this.http
      .get<T>(`${this.BASE_URL}/${path}`, {withCredentials: true})
      .toPromise<T>();
  }

  async post(path: string, body: string): Promise<any> {
    return this.http
      .post(`${this.BASE_URL}/${path}`, body, {withCredentials: true})
      .toPromise()
  }

  async delete(path: string): Promise<any> {
    return this.http
      .delete(`${this.BASE_URL}/${path}`)
      .toPromise()
  }

  async update(path: string, body): Promise<any> {
    return this.http
      .put(`${this.BASE_URL}/${path}`, body)
      .toPromise()
  }

  listenToEvent<T = any>(event_name: APIEvent, fn: Function): Promise<void> {
    return;
  }

  stopListeningToEvent<T = any>(event_name: APIEvent): Promise<void> {
    return;
  }
}
