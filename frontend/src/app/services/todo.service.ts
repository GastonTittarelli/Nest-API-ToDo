import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(title: string): Observable<{ message: string; todo: Todo }> {
  return this.http.post<{ message: string; todo: Todo }>(this.apiUrl, { title });

  }

  deleteTodo(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  updateTodo(id: number, changes: Partial<Todo>): Observable<Todo> {
  return this.http.patch<Todo>(`${this.apiUrl}/${id}`, changes);
}
}
