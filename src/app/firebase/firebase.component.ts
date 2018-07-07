import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../firebase.service';
declare var firebase : any 
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  firebaseninja=[];
  constructor(public firebaseservice : FirebaseService) { }

  ngOnInit() {
  //  this.firebaseservice.fetchData().subscribe(
    //  (data) => this.firebase = data
  //  );
  this.fbGetData();
  }

fbGetData(){
  firebase.database().ref('/').on('child_added',(snapshot)=>{this.firebaseninja.push(snapshot.val())})
}
fbPostData(name,belt){
  firebase.database().ref('/').push({name:name,belt:belt})
}
}
