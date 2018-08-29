import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name;
  public description;

  onSubmit() {
  	console.log(this.name);
  	console.log(this.description);
  }

}
