import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {DatePipePipe} from "./pipes/date-pipe.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myDate = '2014-11-12T00:00:00Z';

  name = new DatePipePipe().transform('2022-06-12T00:00:00Z', 'quarter');
}
