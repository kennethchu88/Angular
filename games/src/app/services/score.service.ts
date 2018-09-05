import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ScoreService {

	constructor() { }

	player1 = 0;
	player2 = 0;

	updateP1Score(){
		this.player1 ++;
	}

	updateP2Score(){
		this.player2 ++;
	}

	resetScore(){
		this.player1=0;
		this.player2=0;
	}

	getScore():Observable<any>{
		return of({"p1":this.player1, "p2": this.player2});
	}

}

