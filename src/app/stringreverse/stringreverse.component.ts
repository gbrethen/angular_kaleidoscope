import { Component, OnInit, HostBinding } from '@angular/core';
import { ComponentDisplayService } from '../component-display.service';

@Component({
  selector: 'app-stringreverse',
  templateUrl: './stringreverse.component.html',
  styleUrls: ['./stringreverse.component.css']
})
export class StringreverseComponent implements OnInit {

  string1: string = '';
  results: string = '';

  @HostBinding('class.showSR')
  showSR = false;

  constructor(private componentDisplay: ComponentDisplayService) { }

  ngOnInit() {
    this.componentDisplay.changeSR.subscribe(showSR => {
      this.showSR = showSR;
    })
  }

  DisplayReverseString(): void {
    this.results = this.reverse(this.string1);
    
    this.ResetStrings();
  }

  reverse(s: string): string {
    for(var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
  }

  ResetStrings(): void {
    this.string1 = '';
  }

  ClearStrings(): void {
    this.string1 = '';
    this.results = '';
  }

}
