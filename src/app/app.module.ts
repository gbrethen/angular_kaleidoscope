import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppBlocksComponent } from './app-blocks/app-blocks.component';
import { CommonelementComponent } from './commonelement/commonelement.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBlocksComponent,
    CommonelementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
