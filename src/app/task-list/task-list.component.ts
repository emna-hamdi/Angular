import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
   lists: Array<any>=[] ;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.lists=  this.tasksService.listTask();
  }

}
