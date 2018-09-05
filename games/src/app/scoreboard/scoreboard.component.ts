import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(private score: ScoreService) { }

  p1 : number;
  p2 : number;
  scores : any;

  ngOnInit() {
  	this.score.getScore().subscribe(s => this.scores = s);
  	this.p1 = this.scores.p1;
  	this.p2 = this.scores.p2;
  }

}
