import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../logging.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:LoggingService) { }

  ngOnInit() {
  }

}
