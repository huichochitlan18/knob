import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinner, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit {

  @Input() color: ThemePalette = 'primary';
  @Input() value = 50;
  @Input() title:string = "chrome";
  mode: ProgressSpinnerMode = 'determinate';
  
  @ViewChild("spinner") myButton!:ElementRef;

  
  constructor(  private renderer: Renderer2 ) { }

  ngOnInit(): void {

  }
}
