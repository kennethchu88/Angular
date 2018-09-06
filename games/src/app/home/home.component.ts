import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	p1 : string = "";
	p2 : string = "";

  constructor(private scoreService:ScoreService) { }

  ngOnInit() {
  }

  set(){
  	this.scoreService.setP1Name(this.p1);
  	this.scoreService.setP2Name(this.p2);
  }

}
