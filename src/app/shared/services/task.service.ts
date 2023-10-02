import { Injectable } from '@angular/core';
import { TaskModel } from '../models/new-task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private newTasks: TaskModel[] = [];
  private doneTasks: TaskModel[] = [];
  private newTaskProvider$: Subject<TaskModel[]> = new Subject();
  private doneTaskProvider$: Subject<TaskModel[]> = new Subject();

  constructor() {}
  // ========================================================== newTask
  public getNewTasks(): Subject<TaskModel[]> {
    return this.newTaskProvider$;
  }
  public addNewTask(task: TaskModel): void {
    this.newTasks.unshift(task);
    this.newTaskProvider$.next(this.newTasks);
    console.log(this.newTasks);
  }
  public setDoneTask(id: number) {
    const idx = this.newTasks.findIndex((item) => item.id === id);
    if (idx !== -1) {
      const doneTask = this.newTasks.splice(idx, 1)[0];
      console.log(doneTask);
      doneTask.endDate = new Date();
      this.doneTasks.unshift(doneTask);
      this.doneTaskProvider$.next(this.doneTasks);
    }
  }
  // ========================================================= doneTask
  public getDoneTasks(): Subject<TaskModel[]> {
    return this.doneTaskProvider$;
  }
  public deletTask(id: number) {
    this.doneTasks = this.doneTasks.filter((item) => item.id !== id);
    this.doneTaskProvider$.next(this.doneTasks);
  }
}
