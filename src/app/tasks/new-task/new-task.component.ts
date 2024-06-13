import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    date: string;
  }>();

  //standard angular change detection mechanizm - regular properties
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // ---
  //signal approach
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
