import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users: Array<Object>;
  @Output() public sendData=new EventEmitter<Number>();
  
  constructor() { }

  ngOnInit(): void {
  }

 updateUser(index: Number) {
  //  console.log(index);
    this.sendData.emit(index);
  }
}
