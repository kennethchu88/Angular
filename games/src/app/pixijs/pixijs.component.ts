import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
	selector: 'app-pixijs',
	templateUrl: './pixijs.component.html',
	styleUrls: ['./pixijs.component.css']
})
export class PixijsComponent implements OnInit {

	@ViewChild('canvas', {read: ElementRef}) public canvas: ElementRef;

	public app;

	constructor() { }

	ngOnInit() {

		this.app = new PIXI.Application({ 
			width: 1000, 
			height: 500,                       
			antialias: true, 
			transparent: true, 
			resolution: 1
		}
		);
		this.canvas.nativeElement.appendChild(this.app.view);

		let stickman = new PIXI.Sprite.fromImage("../assets/stickman.png");
		stickman.width = 50;
		stickman.height = 50;
		this.app.stage.addChild(stickman);

		this.app.ticker.add(delta => gameLoop(delta));
		function gameLoop(delta){
			stickman.x += 1 + delta;
		}


	}

}

