import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnaMenuComponent } from './ana-menu/ana-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GirisComponent } from './giris/giris.component';
import { PersonelListesiComponent } from './personel-listesi/personel-listesi.component';
import { TokenInterceptor } from './token.interceptor';
import { BolPipe } from './bol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnaMenuComponent,
    PersonelListesiComponent,
    GirisComponent,
    BolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
