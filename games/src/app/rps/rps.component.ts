import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-rps',
	templateUrl: './rps.component.html',
	styleUrls: ['./rps.component.css']
})
export class RpsComponent implements OnInit {

	constructor() { }

	p1 : number;
	p2 : number;
	msg : string;
	show : boolean;

	ngOnInit() {
		this.p1 = undefined;
		this.p2 = undefined;
		this.msg = "Waiting...";
		this.show = false;
	}

	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) { 
		if (typeof this.p1 === "undefined" || typeof this.p2 === "undefined"){

			switch (event.key){
				case "q":
				this.p1 = 1;
				break;
				case "w":
				this.p1 = 2;
				break;
				case "e":
				this.p1 = 3;
				break;
				case "7":
				this.p2 = 1;
				break;
				case "8":
				this.p2 = 2;
				break;
				case "9":
				this.p2 = 3;
				break;
			}
			this.checkWinner();
		}
	}

	checkWinner(){
		if (typeof this.p1 !== "undefined" && typeof this.p2 !== "undefined"){
			this.show = true;
			if (this.p1 === this.p2){
				this.msg = "Tie game!";
			} else if ((this.p1 === 1 && this.p2 === 3) || (this.p1 === 2 && this.p2 === 1) || (this.p1 === 3 && this.p2 === 2)){
				this.msg = "Player 1 wins!";
			} else {
				this.msg = "Player 2 wins!";
			}
		}
	}

	reset(){
		this.ngOnInit();
	}

}
