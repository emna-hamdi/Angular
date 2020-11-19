import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn : Observable<boolean>;
  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
   }

  ngOnInit(): void {
  }

  logout(){
  this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
