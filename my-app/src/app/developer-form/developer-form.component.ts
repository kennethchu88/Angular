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

  public developer = 
  {
    name: "",
    description: ""
  }


  onSubmit() {

  	console.log(this.developer.name);
  	console.log(this.developer.description);
  }

}
