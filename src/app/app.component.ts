import { Component } from '@angular/core';

// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  // removing imports above since imports are not needed with modules
})
export class AppComponent {
  users = DUMMY_USERS;
  // when default user is not specified, element <app-tasks/> component shouldn't be rendered
  selectedUserId?: string;
  // ---
  // when default user is specified
  // selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user with id:' + id);
  }
}
