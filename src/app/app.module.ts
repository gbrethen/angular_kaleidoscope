import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppBlocksComponent } from './app-blocks/app-blocks.component';
import { CommonelementComponent } from './commonelement/commonelement.component';
import { CheckerboardComponent } from './checkerboard/checkerboard.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { StringreverseComponent } from './stringreverse/stringreverse.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBlocksComponent,
    CommonelementComponent,
    CheckerboardComponent,
    SanitizeHtmlPipe,
    StringreverseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
