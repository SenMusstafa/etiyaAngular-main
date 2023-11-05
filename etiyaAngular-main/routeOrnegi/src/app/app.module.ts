import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BolumListesiComponent } from './bolum-listesi/bolum-listesi.component';
import { PersonelListesiComponent } from './personel-listesi/personel-listesi.component';
import { SayfaBulunamadiComponent } from './sayfa-bulunamadi/sayfa-bulunamadi.component';
import { PersonelDetayComponent } from './personel-detay/personel-detay.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonelListesiComponent,
    BolumListesiComponent,
    SayfaBulunamadiComponent,
    PersonelDetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
