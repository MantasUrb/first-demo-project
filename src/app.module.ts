import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { UserComponent } from './app/user/user.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, UserComponent, TasksComponent],
})
export class AppModule {}
