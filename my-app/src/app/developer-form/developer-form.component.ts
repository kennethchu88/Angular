import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public developer = 
  {
    name: "",
    description: ""
  }

  @Output() messageEvent = new EventEmitter<string>();

  onSubmit() {
    this.messageEvent.emit(this.developer);
    this.developer = Object.assign({}, this.developer);
  }

}
