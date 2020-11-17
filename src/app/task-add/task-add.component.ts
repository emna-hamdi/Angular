import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import {FormControl,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {


  taskForm;
  submitted: Boolean = false;


  constructor(private tasksService: TasksService,private rooter:Router) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('',[Validators.required,Validators.minLength(3)]),
      description: new FormControl('', [Validators.required])
    })
  }
  submitForm() {
    if (this.taskForm.invalid) {
      return;
    }
    this.tasksService.addTask(this.taskForm.value);
    this.rooter.navigateByUrl("/tasks");
  }

  shouldShowTitleRequiredError() {
    const title = this.taskForm.controls.title;
    return title.touched && title.hasError('required');

  }

}
