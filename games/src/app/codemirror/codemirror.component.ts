import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import CodeMirror from 'codemirror';
import hljs from 'highlight.js';

@Component({
	selector: 'app-codemirror',
	templateUrl: './codemirror.component.html',
	styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent implements OnInit {

	@ViewChild('code', {read: ElementRef}) public code: ElementRef;
	@ViewChild('result', {read: ElementRef}) public result: ElementRef;


	editor:any;

	constructor() { }

	ngOnInit() {

		this.editor = CodeMirror.fromTextArea(this.code.nativeElement, {
			lineNumbers: true,
			mode:  "javascript"
		});
	}

	submit_html(){
		this.editor.save();
		var code2 = this.code.nativeElement.value;
		this.result.nativeElement.srcdoc = code2;
	}

	changeMode(newMode){
		this.editor.setOption("mode", newMode);
		console.log(this.editor);
	}

}
