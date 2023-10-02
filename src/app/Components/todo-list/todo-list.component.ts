import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/new-task.model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  newTasks: TaskModel[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getNewTasks().subscribe((todo) => {
      this.newTasks = todo;
    });
  }
  done(id: number) {
    this.taskService.setDoneTask(id);
    console.log(this.newTasks);
  }
}
