import { AuthService } from './../services/auth.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private rooter: Router) { }
  submitted = false;
  loginForm;

  ngOnInit(): void {
    this.loginForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),


    }//,this.tasksService.passwordMatchValidator('password','confirmPassword')
    );
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (this.authService.loginUser(this.loginForm.value)) {
      this.rooter.navigateByUrl("/dashbaord");
    }
  }


}
