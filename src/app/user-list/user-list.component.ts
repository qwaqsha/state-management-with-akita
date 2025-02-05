import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserQuery } from '../state/user.query';
import { UserService } from '../state/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users$ = this.userQuery.users$;

  constructor(
    private userQuery: UserQuery,
    private userService: UserService
  ) { }

  addUser(name: string, email: string) {
    if (!name || !email) return;

    const user: User = {
      id: Date.now().toString(),
      name,
      email,
      isActive: true
    };

    this.userService.addUser(user);
  }

  toggleUserStatus(user: User) {
    this.userService.updateUser(user.id, { isActive: !user.isActive });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId);
  }
}