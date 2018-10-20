import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyvisibilityDirective } from './myvisibility.directive';
import { AppMyNewColorDirective } from './mynewcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyvisibilityDirective,
    AppMyNewColorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
