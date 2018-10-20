import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any;
  userForm: FormGroup;
  name: string;

  constructor(public todoService: TodoService) {}
  ngOnInit() {
    this.getTodoList();

    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  getTodoList() {
    this.todoService.todoList().subscribe((todos) => {
      this.todos = todos['result'];
    });
  }

  deleteClick(id: number) {
    const index = this.todos.indexOf(id);
    this.todos.splice( id, 1 );
    // this.todos = this.todos.splice(1 , 1);
  }

  onSubmit() {
    const name = this.userForm.value.name;
    this.todoService.addTodo(name).subscribe((data) => {
      console.log(data);
      this.getTodoList();
    });
  }
}
