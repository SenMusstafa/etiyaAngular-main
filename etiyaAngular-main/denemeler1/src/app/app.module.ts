import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Deneme1Component } from './deneme1/deneme1.component';
import { Deneme2Component } from './deneme2/deneme2.component';
import { Deneme3Component } from './deneme3/deneme3.component';
import { Deneme4Component } from './deneme4/deneme4.component';
import { Deneme5Component } from './deneme5/deneme5.component';
import { Deneme6Component } from './deneme6/deneme6.component';
import { Deneme7Component } from './deneme7/deneme7.component';
import { PipeOrnegiComponent } from './pipe-ornegi/pipe-ornegi.component';
import { PipeOrnegi2Component } from './pipe-ornegi2/pipe-ornegi2.component';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { Component1Component } from './interaction/component1/component1.component';
import { Component2Component } from './interaction/component2/component2.component';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    Deneme1Component,
    Deneme2Component,
    Deneme3Component,
    Deneme4Component,
    Deneme5Component,
    Deneme6Component,
    Deneme7Component,
    PipeOrnegiComponent,
    PipeOrnegi2Component,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr' }, // proje genelinde default locale ayarı yapıyor.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
