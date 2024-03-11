import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos?: Todo[];
  todo = new Todo();
  id?: number;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTodosData();
  }

  getTodosData() {
    this.dataService.getData().subscribe((res) => {
      this.todos = res as Todo[];
    });
  }

  deleteTodo(id?: number) {
    this.dataService.deleteData(id).subscribe((res) => {
      this.getTodosData();
    });
  }

  addTodo() {
    this.dataService.addData(this.todo).subscribe((res) => {
      this.getTodosData();
    });
  }
}
