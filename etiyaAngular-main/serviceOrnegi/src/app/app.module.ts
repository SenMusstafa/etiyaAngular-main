import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonelListesiDetayComponent } from './personel-listesi-detay/personel-listesi-detay.component';
import { PersonelListesiComponent } from './personel-listesi/personel-listesi.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonelListesiComponent,
    PersonelListesiDetayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
