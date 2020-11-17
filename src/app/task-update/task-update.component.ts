import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  index;
  taskForm;
  submitted: Boolean = false;

  constructor(private tasksService: TasksService, private rooter: ActivatedRoute,private rooter2:Router) { }




  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });

    this.index = this.rooter.snapshot.paramMap.get("index");
    const task = this.tasksService.getTaskId(this.index);
    this.taskForm.patchValue(task);
  }



  submitForm() {
    if (this.taskForm.invalid) {
      return;
    }

    this.tasksService.updateItem(this.taskForm.value, this.index);
    this.rooter2.navigateByUrl("/tasks");
  }

  shouldShowTitleRequiredError() {
    const title = this.taskForm.controls.title;
    return title.touched && title.hasError('required');

  }

}
