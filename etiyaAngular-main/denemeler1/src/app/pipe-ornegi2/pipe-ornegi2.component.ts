import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-ornegi2',
  template: `
  Kitap Adı: {{ kitapAdi }}<br/>
  Kitap Adı (lowercase): {{ kitapAdi | lowercase}}<br/>
  Kitap Adı (uppercase): {{ kitapAdi | uppercase }}<br/>
  Kitap Adı (titlecase): {{ kitapAdi | titlecase }}<br/>
  Kitap Adı (slice : 1): {{ kitapAdi | slice : 1 }}<br/>
  Kitap Adı (slice : 1 : 5): {{ kitapAdi | slice : 1 : 5 }}<br/>
  Personel: {{ personel }}<br/>
  Personel (json): {{ personel | json }}<br/>
  5.678: {{ 5.678 }} <br/>
  5.678 (number): {{ 5.678 | number }} <br/>
  5.678 (number:3.5): {{ 5.678 | number : '3.5'}} <br/>
  5.678 (number:1.1): {{ 5.678 | number : '1.1'}} <br/>
  5.678 (number:1.4-5): {{ 5.678 | number : '1.4-5'}} <br/>
  15.678 (number:1.1-2): {{ 15.678 | number : '1.1-2'}} <br/>

  0.2512345 (percent) {{ 0.25 | percent }} <br/>
  104.99 (currency:TRY:symbol) {{ 104.99 | currency : 'TRY' : 'symbol' }} <br/>
  104.99 (currency:TRY:code) {{ 104.99 | currency : 'TRY' : 'code' }} <br/>
  104.99 (currency:'Türk Lirası ') {{ 104.99 | currency : 'TRY' : 'Türk Lirası ' }} <br/>
  `,
  styles: [
  ]
})
export class PipeOrnegi2Component {
  kitapAdi = "hAyvaN mEZArlığı";
  personel = {
    adi: "Levent",
    "email": "levent.guren@gmail.com",
    sehir: "Ankara"
  };
}
