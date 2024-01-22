import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss', './header.component.scss'],
})
export class HeaderComponent {
  constructor(public userService: UserService) {}

  logIn = () => {
    this.userService.login();
  };

  logOut = () => {
    this.userService.logout();
  };
}
