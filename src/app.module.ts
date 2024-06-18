import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { UserComponent } from './app/user/user.component';
import { TaskComponent } from './app/tasks/task/task.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';
import { SharedModule } from './app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
