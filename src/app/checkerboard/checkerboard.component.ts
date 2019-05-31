import { Component, OnInit, HostBinding } from '@angular/core';
import { ComponentDisplayService } from '../component-display.service';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';

@Component({
  selector: 'app-checkerboard',
  templateUrl: './checkerboard.component.html',
  styleUrls: ['./checkerboard.component.css']
})

export class CheckerboardComponent implements OnInit{

  @HostBinding('class.showCB')
  showCB = false;

  resultCB: string = this.GenerateBoard();

  constructor(private componentDisplay: ComponentDisplayService) {
    
  }

  ngOnInit() {
    this.componentDisplay.changeCB.subscribe(showCB => {
      this.showCB = showCB;
    })
  }

  GenerateBoard(): string {
    let iRow: number = 8;
    let iCol: number = 8;
    let sHtml: string = "<table id='tblCB' style='margin: 0 auto; width: 400px; height: 400px; border-collapse: collapse; box-shadow: 8px 8px 4px #898989;'>";

    //Generate Rows
    for(var i = 0; i < iRow; i++) {
      sHtml += "<tr>";

      //Generate Columns
      for(var x = 0; x < iCol; x++) {
        if((i%2 == 0 && x%2 != 0) || (i%2 != 0 && x%2 == 0)) {
          sHtml += "<td style='margin: 0 auto; border: 1px solid #000; background-color: #343a40;'>&nbsp;</td>";
        }else {
          sHtml += "<td style='margin: 0 auto; border: 1px solid #000;'>&nbsp;</td>";
        }
      }
      sHtml += "</tr>";
    }
    sHtml += "</table>";

    return sHtml;
  }

}
