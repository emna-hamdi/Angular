import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  firstname:String="";
  lastname:String="";

  usersList:Array<Object>=[];
 

  constructor() { }
  
  ngOnInit(): void {
  }

  addUser(){
    var user = {
     firstname: this.firstname,
   lastname: this.lastname
    };
  this.usersList.push(user)
  this.firstname ="";
  this.lastname="";
  }

  showUser(index: number)
  {
  }

  onUpdate(index:any){
    var user: any =this.usersList[index];
    this.firstname= user.firstname;
    this.lastname= user.lastname;
    console.log(index);
    
  }
  deleteUser(index: number) {
    this.usersList.splice(index, 1);
  }

}
