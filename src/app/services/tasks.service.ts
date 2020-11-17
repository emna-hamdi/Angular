import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  addTask(item) {
    const taskItem: Array<any> = JSON.parse(localStorage.getItem("listTasks")) || [];
    taskItem.push(item);
    localStorage.setItem("listTasks", JSON.stringify(taskItem));
  }

  updateItem(task, id) {
    const taskItem: Array<any> = JSON.parse(localStorage.getItem("listTasks")) || [];
    taskItem.splice(id, 1, task);
    localStorage.setItem("listTasks", JSON.stringify(taskItem));
  }

  listTask() {
    const listTasks = JSON.parse(localStorage.getItem("listTasks")) || [];
    return listTasks;
  }

  deleteTask(id) {
    const listTasks = JSON.parse(localStorage.getItem("listTasks")) || [];
    listTasks.splice(id, 1);
    localStorage.setItem("listTasks", JSON.stringify(listTasks));
  }

  getTaskId(id) {
    const tasks = JSON.parse(localStorage.getItem("listTasks")) || [];
    return tasks[id];
  }

}
