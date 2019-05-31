import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentDisplayService {

  showCE = false;
  showCB = false;

  @Output() changeCE: EventEmitter<boolean> = new EventEmitter();
  @Output() changeCB: EventEmitter<boolean> = new EventEmitter();

  toggle(item: string) {
    switch(item){
      case 'CE': {
        this.showCE = !this.showCE;
        if (this.showCE){
          this.showCB = false;
        }
        break;
      }
      case 'CB': {
        this.showCB = !this.showCB;
        if (this.showCB){
          this.showCE = false;
        }
        break;
      }
      default: {
        this.showCE = false;
        this.showCB = false;
        break;
      }
    }
        
    this.changeCE.emit(this.showCE);
    this.changeCB.emit(this.showCB);    
    
  }
  constructor() { }
}
