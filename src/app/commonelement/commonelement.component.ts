import { Component, OnInit, HostBinding } from '@angular/core';
import { ComponentDisplayService } from '../component-display.service';

@Component({
  selector: 'app-commonelement',
  templateUrl: './commonelement.component.html',
  styleUrls: ['./commonelement.component.css']
})
export class CommonelementComponent implements OnInit {
  
  array1: number[] = [];
  array2: number[] = [];
  results: number[] = [];

  @HostBinding('class.showCE')
  showCE = false;
  
  constructor(private componentDisplay: ComponentDisplayService) { }

  ngOnInit() {
    this.componentDisplay.changeCE.subscribe(showCE => {
      this.showCE = showCE;
    })      
  }

  DisplayCommonElelments(): void {
    this.array1 = this.SquashArray(this.array1);
    this.array2 = this.SquashArray(this.array2);
    this.results = this.array1.filter(o => this.array2.some((item) => o === item)).sort();
    
    this.ResetArrays();
  }

  SquashArray(x): number[] {
    x = JSON.parse("[" + x + "]");
    x = x.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });

    return x;
  }

  ResetArrays(): void {
    this.array1 = [];
    this.array2 = [];
  }

  ClearArrays(): void {
    this.array1 = [];
    this.array2 = [];
    this.results = [];
  }

}
