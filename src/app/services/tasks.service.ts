import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Tasks } from '../tasks/tasks';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl = 'http://localhost:3000/tasks';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(tasks: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.baseUrl, tasks).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl);
  }

  getById(id: number): Observable<Tasks> {
    const url = `${this.baseUrl}/tasks/${id}`;
    return this.http.get<Tasks>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(tasks: Tasks): Observable<Tasks> {
    const url = `${this.baseUrl}/tasks/${tasks.id}`;
    return this.http.put<Tasks>(url, tasks).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Tasks> {
    const url = `${this.baseUrl}/tasks/${id}`;
    return this.http.delete<Tasks>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}