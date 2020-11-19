import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
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
    } else {
      localStorage.setItem("token", "123");
      this.isLoginSubject.next(true);
      return true;
     }

  }

  public isAuthenticated(): boolean {
    const  token = localStorage.getItem('token');
    if(token){
      return true;
    }
    else{return false;}
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
}
