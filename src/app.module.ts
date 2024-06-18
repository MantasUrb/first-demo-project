import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { UserComponent } from './app/user/user.component';
import { TaskComponent } from './app/tasks/task/task.component';
import { CardComponent } from './app/shared/card/card.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    CardComponent,
    NewTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
