import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-developer-info',
  templateUrl: './developer-info.component.html',
  styleUrls: ['./developer-info.component.css']
})
export class DeveloperInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  developers = [];

  @Input() developerInfo: string;

  ngOnChanges(changes){
  	console.log(changes);
  	if (changes.developerInfo.firstChange === false){
  		this.addCard();
  	}
  }

  removeCard(index){

  	this.developers.splice(index,1);
  	this.developers = Object.assign([], this.developers);

  }

  addCard(){
  	this.developers.push(this.developerInfo);
  	this.developers = Object.assign([], this.developers);
  	console.log(this.developers);

  }

}
