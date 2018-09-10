import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-togetherjs',
	templateUrl: './togetherjs.component.html',
	styleUrls: ['./togetherjs.component.css']
})
export class TogetherjsComponent implements OnInit {

	@ViewChild("myCanvas", {read: ElementRef}) myCanvas: ElementRef;
	constructor() { }

	canvas:any;
	started:boolean;
	width:number;
	height:number;

	ngOnInit() {
		this.canvas = this.myCanvas.nativeElement.getContext("2d");
		this.started = false;
		this.width = this.myCanvas.nativeElement.width;
		this.height = this.myCanvas.nativeElement.height;
	}

	start(event){
		var x = event.screenX;
		var y = event.screenY;
		this.canvas.moveTo(x,y);
		this.canvas.beginPath();
		this.started = true;
	}

	move(event){
		//console.log(event);
		if (this.started) {
			this.canvas.lineTo(event.screenX,event.screenY);
			this.canvas.stroke();
		}

	}

	end(event){
		this.started = false;
		this.canvas.closePath();
	}

	clear(){
		this.canvas.clearRect(0, 0, this.width, this.height);
	}

}
