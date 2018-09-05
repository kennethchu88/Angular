import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
	selector: 'app-tictactoe',
	templateUrl: './tictactoe.component.html',
	styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

	constructor(private score : ScoreService) { }

	board : string[][];
	turn : number;
	message : string;
	player = true;

	ngOnInit() {
		this.board = [["","",""],["","",""],["","",""]];
		this.turn = 1;
		this.message = "Game in progress...";
		this.player = !this.player;
		console.log(this.player);
	}

	checkHorizontal(x:string, board:string[][]){
		var bool = false;
		board.forEach(function(row){
			if (row[0] === row[1] && row[1] === row[2] && row[0] === x){
				bool = true;
			}
		});
		return bool;
	}

	checkVertical(x:string){
		var newBoard = [];
		var c1 = [];
		var c2 = [];
		var c3 = [];
		this.board.forEach(function(row){
			c1.push(row[0]);
			c2.push(row[1]);
			c3.push(row[2]);
		});
		newBoard.push(c1, c2, c3);
		return this.checkHorizontal(x,newBoard);
	}

	checkDiagonal(x:string){
		var d1 = (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[1][1] === x);
		var d2 = (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[1][1] === x);
		return d1 || d2;
	}

	checkWin(x:string){
		return this.checkHorizontal(x, this.board) || this.checkVertical(x) || this.checkDiagonal(x);
	}

	insert(i,j){
		if (this.board[i][j] === "" && !this.checkWin("X") && !this.checkWin("O")){
			if (this.turn % 2 === 0){
				this.board[i][j] = "X";
				if (this.checkWin("X")){
					if (this.player) {
						this.message = "Player 1 is the winner!";
						this.score.updateP1Score();
					} else {
						this.message = "Player 2 is the winner!";
						this.score.updateP2Score();

					}
					return;
				}
			} else {
				this.board[i][j] = "O";
				if (this.checkWin("O")){
					if (!this.player) {
						this.message = "Player 1 is the winner!";
						this.score.updateP1Score();
					} else {
						this.message = "Player 2 is the winner!";
						this.score.updateP2Score();
					}
					return;
				}
			}
			this.turn ++;
			var full = true;
			this.board.forEach(function(row){
				row.forEach(function(col){
					if (col === ""){
						full = false;
					}
				})
			})
			if (full === true){
				this.message = "Tie game!";
			}
		}
	}


	reset(){
		this.ngOnInit();
	}

}
