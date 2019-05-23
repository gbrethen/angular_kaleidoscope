import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentDisplayService {

  showCE = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.showCE = !this.showCE;
    this.change.emit(this.showCE);
  }
  constructor() { }
}
