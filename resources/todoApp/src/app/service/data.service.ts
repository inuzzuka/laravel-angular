import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(environment.apiUrl + '/todos');
  }

  addData(data?: Todo) {
    return this.httpClient.post(environment.apiUrl + '/addTodo', data);
  }

  deleteData(id?: number) {
    return this.httpClient.delete(environment.apiUrl + '/deleteTodo/' + id);
  }

  editData(id?: number, data?: Todo) {
    return this.httpClient.put(environment.apiUrl + '/editTodo/' + id, data);
  }

  getTodoById(id?: number) {
    return this.httpClient.get('http://localhost:8000/api/todo/' + id);
  }
}
