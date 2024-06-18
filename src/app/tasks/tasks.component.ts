import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { TaskComponent } from './task/task.component';
// import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  // imports: [TaskComponent, NewTaskComponent], removing imports array as changing this component to module based one
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  // add new property that will instantiate tasksService
  // not sharing that one object that we create here
  // (explanation: 59. Getting Started with Dependency Injection)
  // private tasksService = new TasksService();
  // --
  // // instead you're using dependency injection
  // you 'tell' ng which type of value you need 
  // and ng creates it and provides it as an argument
  constructor(private tasksService: TasksService) {} 
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
