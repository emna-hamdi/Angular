import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  // users:Array<Number>=[];
  // user={
  //   name:"emna",
  //   age:27
  // }
  url="https://img2.freepng.fr/20180512/stw/kisspng-bootstrap-responsive-web-design-web-development-lo-5af676c04b0535.2749534815261016963073.jpg";


  constructor() { }

  ngOnInit(): void {
  }

register(){
  console.log("button clecked");
  
}
}
