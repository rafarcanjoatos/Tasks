import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Lists } from '../lists/lists';

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  baseUrl = 'http://localhost:3000/lists';

  constructor( private http: HttpClient ) {}

  create(lists: Lists): Observable<Lists> {
    return this.http.post<Lists>(this.baseUrl, lists).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getLists(): Observable<Lists[]> {
    return this.http.get<Lists[]>(this.baseUrl);
  }

  getById(id: number): Observable<Lists> {
    const url = `${this.baseUrl}/lists/${id}`;
    return this.http.get<Lists>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(Lists: Lists): Observable<Lists> {
    const url = `${this.baseUrl}/lists/${Lists.id}`;
    return this.http.put<Lists>(url, Lists).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Lists> {
    const url = `${this.baseUrl}/lists/${id}`;
    return this.http.delete<Lists>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}