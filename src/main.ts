import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { UserListComponent } from './app/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.scss']
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);