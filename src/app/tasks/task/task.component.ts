import { Component, Input, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  // no event emitters needed, since service is being
  // used from this file by injecting TasksService
  private tasksService = inject(TasksService)

  onCompleteTask() {
    //TasksService is being used to call removeTask
    // removeTask expects to receive ID of the task as an input;
    this.tasksService.removeTask(this.task.id)
  }
}