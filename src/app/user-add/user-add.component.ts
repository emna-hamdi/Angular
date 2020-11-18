import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  showdDownButton:Boolean=false;
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

  editUser(index: number)
  {
    this.showdDownButton=false;
    var userEdited: any ={
      firstname:this.firstname,
      lastname:this.lastname
    };
  this.usersList.splice(index,1,userEdited);
  }


  onUpdate(index:any){
   this.showdDownButton=true;
    var user: any =this.usersList[index];
    this.firstname= user.firstname;
    this.lastname= user.lastname;
    console.log(index);

  }

  deleteUser(index: any) {
    this.usersList.splice(index, 1);
  }

}
