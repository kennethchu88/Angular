import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ScoreService {

	constructor() { }

	p1Name: string;
	p2Name: string;

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
		var data = {"p1":this.player1, "p2": this.player2};
		return of(data);
	}

	setP1Name(name:string){
		this.p1Name = name;
	}

	setP2Name(name:string){
		this.p2Name = name;
	}

	getP1Name(){
		return this.p1Name;
	}

	getP2Name(){
		return this.p2Name;
	}

}

