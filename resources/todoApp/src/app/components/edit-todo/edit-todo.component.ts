import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css',
})
export class EditTodoComponent {
  todo = new Todo();
  id?: number;
  data?: Todo;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getTodoById(this.id).subscribe((res) => {
      this.data = res as Todo;
      this.todo = this.data;
    });
  }

  editTodo() {
    this.dataService.editData(this.id, this.todo).subscribe((res) => {
      this.router.navigateByUrl('');
    });
  }
}
