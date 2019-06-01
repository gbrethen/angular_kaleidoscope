import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ComponentDisplayService } from '../component-display.service';

@Component({
  selector: 'app-app-blocks',
  templateUrl: './app-blocks.component.html',
  styleUrls: ['./app-blocks.component.css']
})
export class AppBlocksComponent implements OnInit {

  constructor(private componentDisplay: ComponentDisplayService) { }

  @HostListener('CheckerBoard')
  @HostListener('CommonElement')
  @HostListener('StringReverse')

  CheckerBoard() {
    this.componentDisplay.toggle('CB');
  }

  CommonElement() {
    this.componentDisplay.toggle('CE');
  }

  StringReverse() {
    this.componentDisplay.toggle('SR');
  }

  ngOnInit() {
  }

}
