import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpSipService<T> {

  public paginar: () => T | Object | any;
  constructor(private http: HttpClient) {}

  getRecurso(urlBase: string): Observable<T[]> {
    return this.http.get<T[]>(urlBase)
      .pipe(
      map(res => res)
    );
  }

  getRecursoPage(urlBase: string, page: number = 0, size: number = 5): Observable<T[]> {
    return this.http.get<T[] | any>(`${urlBase}?page=${page}&&size=${size}`)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  searchRecurso(urlBase: string, param?: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<number>>(`${urlBase}?q=${param}`).pipe(
      map(res => res),
      catchError(err => {
        throw err;
      })
    );
  }

  findRecurso(urlBase: string, param: String | {}): Observable<HttpResponse<T>> {
    return this.http.get<HttpResponse<T>>(`${urlBase}/${param}`)
      .pipe(
        map( res => res)
      );
  }

  salvarRecurso(urlBase: string, param: T | Object | {}): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(urlBase, param)
      .pipe(
        map(res => res),
        catchError(err => {
          throw err;
        })
      );
  }

  updatedRecurso(urlBase: string, id: number | string, data: T | Object | {}): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(`${urlBase}/${id}`, data)
      .pipe(
        map(res => res)
      );
  }

  deleteRecurso(urlBase: string, id: number | string): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${urlBase}/${id}`)
      .pipe(
        map(res => res)
      );
  }
}
