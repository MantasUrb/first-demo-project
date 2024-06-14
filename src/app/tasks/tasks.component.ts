import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  // add new property that will instantiate tasksService
  // private tasksService = new TasksService();
  // --
  // instead you're using dependency injection
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
    return console.log('onStartAddTask() is executed');
  }

  onCancelAddTask() {
    this.isAddingTask = false;
    return console.log('onCancelAddTask() is executed');
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
    console.log('onAddTask() worked');
  }
}
