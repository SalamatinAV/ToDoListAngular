import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/new-task.model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
})
export class DoneListComponent implements OnInit {
  doneTasks: TaskModel[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getDoneTasks().subscribe((todo) => {
      this.doneTasks = todo;
    });
  }

  delet(id: number) {
    this.taskService.deletTask(id);
  }
}
