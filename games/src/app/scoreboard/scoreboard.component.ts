import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(private score: ScoreService) { }

  p1Name : string = "Player 1";
  p2Name : string = "Player 2";

  p1 : number;
  p2 : number;
  scores : any;

  ngOnInit() {
  	this.score.getScore().subscribe(s => this.scores = s);
  	this.p1 = this.scores.p1;
  	this.p2 = this.scores.p2;
  	if(this.score.getP1Name() !== undefined){
  		this.p1Name = this.score.getP1Name();
  	}
  	if(this.score.getP2Name() !== undefined){
  		this.p2Name = this.score.getP2Name();
  	}
  	 
  }

  ngDoCheck(){
  	if (this.scores !== this.score.getScore() || this.p1Name !== this.score.getP1Name() || this.p2Name !== this.score.getP2Name()){
  		this.ngOnInit();
  	}
  }

  reset(){
  	this.score.resetScore();
  }

  getNames(){
  	this.p1Name=this.score.getP1Name();
  	this.p2Name=this.score.getP2Name();
  }

}
