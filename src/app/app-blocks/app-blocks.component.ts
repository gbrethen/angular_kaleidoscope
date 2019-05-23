import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ComponentDisplayService } from '../component-display.service';

@Component({
  selector: 'app-app-blocks',
  templateUrl: './app-blocks.component.html',
  styleUrls: ['./app-blocks.component.css']
})
export class AppBlocksComponent implements OnInit {

  constructor(private componentDisplay: ComponentDisplayService) { }

  @HostListener('click')
  click() {
    this.componentDisplay.toggle();
  }

  ngOnInit() {
  }

}
