import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentDisplayService {

  showCE = false;
  showCB = false;
  showSR = false;

  @Output() changeCE: EventEmitter<boolean> = new EventEmitter();
  @Output() changeCB: EventEmitter<boolean> = new EventEmitter();
  @Output() changeSR: EventEmitter<boolean> = new EventEmitter();

  toggle(item: string) {
    switch(item){
      case 'CE': {
        this.showCE = !this.showCE;
        if (this.showCE){
          this.showCB = false;
          this.showSR = false;
        }
        break;
      }
      case 'CB': {
        this.showCB = !this.showCB;
        if (this.showCB){
          this.showCE = false;
          this.showSR = false;
        }
        break;
      }
      case 'SR': {
        this.showSR = !this.showSR;
        if (this.showSR){
          this.showCE = false;
          this.showCB = false;
        }
        break;
      }
      default: {
        this.showCE = false;
        this.showCB = false;
        this.showSR = false;
        break;
      }
    }
        
    this.changeCE.emit(this.showCE);
    this.changeCB.emit(this.showCB);
    this.changeSR.emit(this.showSR);    
    
  }
  constructor() { }
}
