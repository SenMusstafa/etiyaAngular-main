import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // <app-root></app-root>
 // selector: '.app-root', // <div class="app-root"></div>
 // selector: '[app-root]', // <div app-root></div>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ilkProje';
  sayi = 5;
  test = false;
  adi?: string;
  adres = window.location.href;

  hesapla() {
    return this.sayi * 4;
  }
}
