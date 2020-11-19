import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }



  registerUser(user) {
    const userItem: Array<any> = JSON.parse(localStorage.getItem("registerUsers")) || [];
    userItem.push(user);
    localStorage.setItem("registerUsers", JSON.stringify(userItem));
  }

  loginUser(user) {

    const userItem: Array<any> = JSON.parse(localStorage.getItem("registerUsers")) || [];

    const validUser = userItem.find((currentUser) => currentUser.email === user.email && currentUser.password === user.password);
    if (!validUser) {
      return false;
    } else { return true; }

  }
}
