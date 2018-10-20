import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todoList() {
    return this.http.get('http://localhost/api/?action=getUsers');
  }

  addTodo(name: string) {
    const formData: FormData = new FormData();
    formData.append('name', name);
    return this.http.post('http://localhost/api/?action=addUser', formData);
  }
}
