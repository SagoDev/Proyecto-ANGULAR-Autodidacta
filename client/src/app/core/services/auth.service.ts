import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    {
      id: '1',
      username: 'admin',
      password: 'admin'
    },
    {
      id: '2',
      username: 'user1',
      password: 'user1'
    },
    {
      id: '3',
      username: 'user2',
      password: 'user2'
    }
  ];


  getUser(username: string, password: string): boolean {
    let userExist = this.users.find(user => user.username === username && user.password === password);
    if (userExist) {
      return true;
    }
    return false;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  constructor() { }
}
