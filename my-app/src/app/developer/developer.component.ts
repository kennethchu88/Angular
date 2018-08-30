import { Component, AfterViewInit } from '@angular/core';
import { DeveloperFormComponent } from "../developer-form/developer-form.component";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {


  constructor() { }

  public message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
