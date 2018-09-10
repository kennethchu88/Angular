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
			width: 500, 
			height: 500,                       
			antialias: true, 
			transparent: false, 
			resolution: 1
		}
		);
		console.log(this.app);
		this.canvas.nativeElement.appendChild(this.app.view);
		console.log(this.app.stage);

		PIXI.loader
		.add("assets/stickman.png")
		.load(this.setup(this.app));


	}

	setup(app){
		let stickman = new PIXI.Sprite(PIXI.loader.resources["assets/stickman.png"].texture);
		console.log(app);
		app.stage.addChild(stickman);
		//this.app = app;
		console.log(this.app);
	}

}
