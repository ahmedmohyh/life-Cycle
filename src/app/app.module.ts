import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubchildComponent } from './subchild/subchild.component';
import { HighlightDirective } from './highlight.directive';
import { RandomColorsDirective } from './random-colors.directive';
import { UnlessDirective } from './unless.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SubchildComponent,
    HighlightDirective,
    RandomColorsDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
