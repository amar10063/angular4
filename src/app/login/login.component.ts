import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoggingService} from '../logging.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private user:LoggingService) { }

  ngOnInit() {
  }
loginUser(e){
  e.preventDefault();
  console.log(e);
  var username=e.target.elements[0].value;
    var password=e.target.elements[0].value;
  //  console.log(username,password);
  //  return false;
  if(username=="admin" && password=="admin"){
  this.user.setUserLoggedIn();
    this.router.navigate(['dashboard']);
  }
}
}
