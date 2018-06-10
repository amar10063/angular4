import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
//import  {FilterPipe } from "../filter.pipe";
import {DataService} from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']

})
export class DirectoryComponent implements OnInit {
  ninjas=[];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.fetchData().subscribe(
      (data) => this.ninjas = data
    );
  }

}
