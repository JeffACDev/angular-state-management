import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login = () => {};

  isUserLoggedIn(): boolean {
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
