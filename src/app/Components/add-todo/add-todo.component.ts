import { Component } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/new-task.model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  title: string = '';
  constructor(private taskService: TaskService) {}

  addTask() {
    const todos: TaskModel = {
      title: this.title,
      id: new Date().getMilliseconds(),
      startDate: new Date(),
    };
    if (this.title.length >= 37) {
      alert('Слишком длинный текст ');
      this.title = '';
      return;
    }
    this.taskService.addNewTask(todos);
    this.title = '';
  }
}
